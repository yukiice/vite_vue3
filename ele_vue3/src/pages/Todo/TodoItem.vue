<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ITodo, TODO_STATUS} from "@/types";
interface IStatusDoing{
  DOING:TODO_STATUS,
  FINISH:TODO_STATUS,
  WILLDO:TODO_STATUS
}
export default defineComponent({
  name:'TodoItem',
  props:{
    item:Object as PropType<ITodo>
  },
  setup(props,{emit}){
    const statusState = <IStatusDoing>{
      DOING:TODO_STATUS.DOING,
      FINISH:TODO_STATUS.FINISH,
      WILLDO:TODO_STATUS.WILLDO
    }

    //创建自定义事件
    const setStatus = (id:number):void=>{
      emit('setStatus',id)
    }
    const removeTodo  =(id:number):void=>{
      emit('removeTodo',id)
    }
    const setDoing = (id:number):void=>{
      emit('setDoing',id)
    }
    return {
      ...statusState,
      setStatus,
      removeTodo,
      setDoing
    }
  }
})
</script>
<template>
  <div>
    <input type="checkbox" :checked="item.status=== FINISH" @click="setStatus(item.id)">
    <span :class="item.status === FINISH?'line-through':''">{{item.content}}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button v-if="item.status !== FINISH" @click="setDoing(item.id)" :class="item.status === DOING?'doing':'willdo'">{{item.status === DOING?'正在做...':'马上做'}}</button>
  </div>
</template>

<style>
.line-through {
  text-decoration: line-through
}
.doing{
  background-color: #cdcdcd;
  color: white;
}
.willdo{
  background-color: orange;
  color: white;
}
</style>

