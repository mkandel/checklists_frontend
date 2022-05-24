<template>
  <div>
    <draggable
        v-model="userStore.users"
        @start="drag=true"
        @end="drag=false"
        item-key="id">
      <template #item="{el}">
        <div>{{ el.username }}
          <UserView user="el"/>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import UserView from './UserView';
import { useUserStore } from "@/stores/userstore";
import draggable from 'vuedraggable';

export default {
  name: "UserList",
  components: {
    draggable,
    UserView
  },
  setup() {
    console.log( "In setup..." );
    const userStore = useUserStore();
    userStore.fetchUsers();
    // this.userStore;
    return {
      draggable,
      userStore,
    }
  },
  data( data ) {
    console.log( data );
    return {
      drag: true,
      // users: userStore.users;
    }
  }
}
</script>
