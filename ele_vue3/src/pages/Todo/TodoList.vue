<template>
  <div>
    <div v-for="item of todoList" :key="item.id">
      <todo-item :item="item" @removeTodo="removeTodo" @setStatus="setStatus" @setDoing="setDoing"></todo-item>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import TodoItem from "@/pages/Todo/TodoItem.vue";
import {ITodo} from "@/types";
import {IUseTodo, useTodo} from "@/hooks";
export default  defineComponent({
  name:'TodoList',
  props:{
    todoList:Array as PropType<ITodo[]>
  },
  components: {TodoItem},
  setup(props,ctx){
    console.log(props)
    const {
      removeTodo,
      setStatus,
      setDoing
    }:IUseTodo = useTodo()
    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
})
</script>

<style lang="sass" scoped>

</style>