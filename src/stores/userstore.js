import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userstore", {
  id: "userStore",
  state: () => ({
    users: [],
    loading: false,
  }),
  getters: {
    getUsers: (state) => state.users,
    getLoading: (state) => state.loading,
  },
  actions: {
    async fetchUsers() {
      console.log("In userStore.fetchUsers() ...");
      this.loading = true;
      try {
        let data = (await axios.get("http://localhost:8088/api/v1/users")).data;
        // console.log(data);
        this.users = JSON.parse(JSON.stringify(data));
        // this.users = data;
        console.log("this.users inside userstore.fetchUsers()");
        console.log(this.users);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async addUser() {},
    async disableUser() {},
  },
});
