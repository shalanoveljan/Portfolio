import { config } from "../config.js";

export default class ApiRequest {
  async get(endpoint) {
    return await fetch(`${config.baseURL}${endpoint}`);
  }

  async post(endpoint, data) {
    return await fetch(`${config.baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
