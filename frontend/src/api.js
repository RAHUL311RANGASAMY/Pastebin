import axios from "axios";

export default axios.create({
  baseURL: import.meta.env. REACT_BACKEND_RENDERURL,
});