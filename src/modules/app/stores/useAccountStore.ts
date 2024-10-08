import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      user: "",
    };
  },
  persist: true,
  actions: {
    setUser(value: string) {
      this.user = value
    },
    clearUser() {
      this.user = ""
    },
  },
});
