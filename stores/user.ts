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
      if (import.meta.client) {
        localStorage.setItem("usuario_id", JSON.stringify(id));
      }
    },
    logout() {
      this.usuarioId = null;
      this.isLoggedIn = false;
      if (import.meta.client) {
        localStorage.removeItem("usuario_id");
      }
    },
    init() {
      if (import.meta.client) {
        console.log("init");
        const usuarioId = localStorage.getItem("usuario_id");
        if (usuarioId) {
          this.usuarioId = JSON.parse(usuarioId);
          this.isLoggedIn = true;
        }
      }
    },
  },
});
