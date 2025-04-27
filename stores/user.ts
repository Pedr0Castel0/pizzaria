import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    usuarioId: null as number | null,
    isLoggedIn: false,
  }),
  actions: {
    setUser(id: number) {
      this.usuarioId = id;
      this.isLoggedIn = true;
    },
    logout() {
      this.usuarioId = null;
      this.isLoggedIn = false;
    },
  },
});
