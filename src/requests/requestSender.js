import ApiRequest from "./baseRequest.js";

const _service = new ApiRequest();

export const getData = async (endpoint) => {
  const response = await _service.get(endpoint);
  return await response.json();
};

export const insertData = async (endpoint, data) => {
  return await _service.post(endpoint, data);
};
