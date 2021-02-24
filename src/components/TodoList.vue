<template>
  <div>
    <div class="header">
      <h1>Todolist</h1>
      <!-- <button type="button" class="createButton" @click="addTodo">create</button> -->
    </div>
    <TodoItem>
      <!-- v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="(todo,index) in todos"
      v-bind:todo="todo"
      v-bind:key="index" -->
    </TodoItem>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  title: "My Todolist",
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    addTodo() {
      var value = this.newTodo.trim();
      var timeStamp = Math.floor(Date.now());
      // if (!value) { return; };
      console.log(value, timeStamp);
      this.todos.push({
        id: timeStamp,
        subscribe: value,
        completed: false,
      });
      this.newTodo = '';
    },
    editTodo() {
      console.log("222");
    },
    removeTodo(key) {
      this.todos.splice(key, 1)
    },
    completeTodo() {
      console.log("333");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  background-color: goldenrod;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100px; */
}
.createButton {
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  height: 50px;
}
</style>