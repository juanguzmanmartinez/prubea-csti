import { defineStore } from "pinia";
import RecargasService from "../api/recargas/recargas.implements";
const recargasService = new RecargasService();
export const useBalanceStore = defineStore("balance", {
  state: () => ({
    balance: null,
  }),
  getters: {
    getBalance(state) {
      return state.balance;
    },
  },
  actions: {
    async getActualBalance() {
      try {
        const response = await recargasService.getActualBalance();
        if (response.data.data.balanceCommerce) {
          this.balance = response.data.data.balanceCommerce;
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
