<template>
  <div class="container-fluid" style="{background-color: #2c3e50}">
    <!--    <div>-->
    <!--      <h1 :style="{color: '#047ddb'}">Checklists</h1>-->
    <!--    </div>-->
    <!--    {{ useUserStore() }}-->
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "./views/UserList";

export default {
  name: 'App',
  components: {
    UserList
  },
}
</script>

<style lang="sass">
@import "/node_modules/bootstrap/scss/bootstrap.scss"
</style>
