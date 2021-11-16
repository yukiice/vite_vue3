<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {useStore} from "@/store";
import  TodoList from '@/pages/Todo/TodoList.vue'
import  TodoInput from '@/pages/Todo/TodoInput.vue'
export default  {
  setup(){

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
    <todo-list></todo-list>
  </div>
</template>

<style>
</style>
