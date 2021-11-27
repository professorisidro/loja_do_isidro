import axios from "axios";

const apiLoja = axios.create(
    {
        baseURL:'http://localhost:3500'
    }
);

export default apiLoja;