<template>
  <div>
    <div :style="{color: '#047ddb'}">
      <h1>Checklists</h1>
    </div>
    <!--    {{ useUserStore() }}-->
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "./components/UserList";

export default {
  name: 'App',
  components: {
    UserList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #06bd54;
  /*body-bg: #06bd54;*/
  /*body-color: #06bd54;*/
}
</style>
