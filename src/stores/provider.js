import { defineStore } from "pinia";
import RecargasService from "../api/recargas/recargas.implements";
const recargasService = new RecargasService();
export const useProviderStore = defineStore("balance", {
  state: () => ({
    providers: [],
  }),
  getters: {
    getProviders(state) {
      return state.providers;
    },
  },
  actions: {
    async getProvidersList() {
      try {
        const response = await recargasService.getProviders();
        if (response.data.data.companies) {
          this.providers = response.data.data.companies;
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
