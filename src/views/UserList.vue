<template>
  <div>
    <draggable
        v-model="userStore.users"
        @start="drag=true"
        @end="drag=false"
        item-key="id">
      <template #item="{el}">
        <div>
          {{ el }}
          <!--          <UserView user="{el}"/>-->
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { useUserStore } from "@/stores/userstore";
import { mapActions, mapState } from 'pinia';

// let userStore = useUserStore();

export default {
  name: "UserList",
  components: {
    draggable,
    // UserView,
    // useUserStore
  },
  setup() {
    console.log( "In UserList.setup() ..." );

    const userStore = useUserStore();
    userStore.fetchUsers();

    return {
      draggable,
      userStore,
    }
  },
  data: () => ({
    drag: true,
  }),
  computed: {
    ...mapState( useUserStore(), [ 'users', 'loading' ] )
  },
  methods: {
    ...mapActions( useUserStore(), [
      'fetchUsers',
      'addUser',
      'disableUser'
    ] )
  }
}
</script>
