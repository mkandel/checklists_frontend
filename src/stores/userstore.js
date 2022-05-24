import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userstore", {
  id: "userStore",
  state: () => ({
    users: [],
    loading: false,
  }),
  getters: {
    users: (state) => state.users,
  },
  actions: {
    async fetchUsers() {
      console.log("In fetchUsers ...");
      this.loading = true;
      try {
        const data = (await axios.get("http://localhost:8088/api/v1/users"))
          .data;
        console.log(data);
        // this.users = JSON.parse(JSON.stringify(data));
        this.users = data;
        console.log(this.users);
      } catch (e) {
        // alert(e);
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async addUser() {},
    async disableUser() {},
  },
});
