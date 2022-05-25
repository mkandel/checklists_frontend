<template>
  <div class="container-fluid" style="{background-color: #2c3e50}">
    <TopNavbar></TopNavbar>
    <!--    <div>-->
    <!--      <h1 :style="{color: '#047ddb'}">Checklists</h1>-->
    <!--    </div>-->
    <!--    {{ useUserStore() }}-->
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "./views/UserList";
import TopNavbar from "@/views/TopNavbar";

export default {
  name: 'App',
  components: {
    UserList,
    TopNavbar
  },
}
</script>

<style lang="sass">
@import "/node_modules/bootstrap/scss/bootstrap.scss"
</style>
