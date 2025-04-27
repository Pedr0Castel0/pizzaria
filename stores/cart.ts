import { defineStore } from "pinia";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
  size: string;
  info?: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Pizza[],
  }),
  getters: {
    total: (state) => state.items.reduce((sum, pizza) => sum + pizza.price, 0),
    totalItems: (state) => state.items.reduce((sum, pizza) => sum + pizza.quantity, 0),
  },
  actions: {
    add(pizza: Pizza) {
      const existingPizza = this.items.find((item) => item.id === pizza.id);
      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        this.items.push({ ...pizza, quantity: 1 });
      }
    },
    remove(idx: number) {
      this.items.splice(idx, 1);
    },
    clear() {
      this.items = [];
    },
  },
});
