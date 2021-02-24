<template>
  <div class="card">
    <div class="subscribe">test1234</div>
    <div class="buttonContent">
      <button type="button" class="deleteButton">Delete</button>
      <button type="button" class="editButton">Edit</button>
    </div>
    <button type="button" class="completeButton" @click="completeTodo">
      Completed
    </button>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  // data() {
  //   return {
  //     isEditing: false
  //   };
  // },
  // methods: {
  //   completeTodo () {
  //   },
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.card {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 30px;
  padding: 16px;
  background-color: blanchedalmond;
  border: 3px solid goldenrod;
  border-radius: 10px;
  width: 400px;
  height: 200px;
}
.subscribe {
  background-color: coral;
  color: black;
  font-size: 32;
}
.buttonContent {
  justify-content: flex-end;
  display: flex;
}
.completeButton {
  border: 3px solid cadetblue;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  text-align: center;
}
</style>
