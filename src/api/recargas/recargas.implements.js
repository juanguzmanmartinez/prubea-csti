import { client } from "../client/client";
let instance = null;

export class RecargasService{

    constructor() {
        if (!instance) {
          instance = this;
        }
        return instance;
      }

    async getActualBalance(){
        return await client.genericGet('getActualBalance')
    }

    async getProviders(){
        return await client.genericGet('getProviders')
    }
}

export default RecargasService