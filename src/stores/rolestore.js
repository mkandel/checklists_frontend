import { defineStore } from "pinia/dist/pinia";

export const useUserStore = defineStore("rolestore", {
  state: () => {
    return {
      roles: [],
    };
  },
  actions: {},
});
