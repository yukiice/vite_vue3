<template>
  <div>
    <input type="text" v-model="todoValue" @keyup.enter="setTodoValue">
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from "vue";
import {IUseTodo, useTodo} from '@/hooks'
export default  defineComponent({
  name:'TodoInput',
  setup(){
    const todoValue =  ref<string>('')
    const {setTodo}:IUseTodo = useTodo()
    const setTodoValue  = (e:KeyboardEvent)=>{
      if (todoValue.value.trim().length){
        setTodo(todoValue.value)
      }
    }
    return {
      todoValue,
      setTodoValue
    }
  },
})
</script>

<style lang="sass" scoped>

</style>