import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api",
});

api.interceptors.response.use(
    (response) => response,
    ({ response, message }) => {
        console.error("API Error:", response?.data || message);
        return Promise.reject(response?.data || message);
    }
);

export default api;
