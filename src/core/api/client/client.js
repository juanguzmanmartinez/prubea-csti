import axios from "axios";

let instance = null;
const API_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_TOKEN;
const HTTP = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `bearer ${TOKEN}`,
  },
});

class Client {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  genericGet(endpoint) {
    const URL_FULL = `/${endpoint}`;
    return HTTP.get(URL_FULL);
  }
}

export const client = new Client();
