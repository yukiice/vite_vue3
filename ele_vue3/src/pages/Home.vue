<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import  TodoList from '@/pages/Todo/TodoList.vue'
import  TodoInput from '@/pages/Todo/TodoInput.vue'
import {IUseTodo, useTodo } from '@/hooks'
import {computed, onMounted} from 'vue'
import {Store, useStore} from "vuex";
export default  {
  setup(){

    const {setTodoList}:IUseTodo  = useTodo()
    const store:Store<any> = useStore()
    onMounted(()=>{
      setTodoList()
    })
    return {
      todoList:computed(()=>store.state.list)
    }
  },
  components:{
    TodoList,
    TodoInput
  }
}


</script>

<template>
  <div>
    <todo-input></todo-input>
    <todo-list :todoList="todoList"></todo-list>
  </div>
</template>

<style>
</style>
