import axios from "axios";

const baseUrl = "/api/products";

const getAll = () => {
  return axios.get(baseUrl);
};

const getById = (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const removeproduct = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const productService = { getAll, create, removeproduct, getById };
export default productService;
