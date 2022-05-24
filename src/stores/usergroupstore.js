import { defineStore } from "pinia/dist/pinia";

export const useUserStore = defineStore("usergroupstore", {
  state: () => {
    return {
      usergroups: [],
    };
  },
  actions: {},
});
