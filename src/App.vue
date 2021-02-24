<template>
  <div>
    <TodoList v-bind:todos="todos"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
// import CreateItem from "./components/CreateItem.vue";

export default {
  name: "app",
  components: {
    TodoList,
    // CreateItem,
  },
  data() {
    return {
      todos: [
        {
          id: "1",
          subscribe: "Project A",
          completed: false
        },
        {
          id: "2",
          project: "Project B",
          completed: true
        },
        {
          id: "3",
          project: "Project C",
          completed: false
        },
        {
          id: "4",
          project: "Project D",
          completed: false
        }
      ]
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>