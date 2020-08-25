
import axios from "axios";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "/api";

const handleError = (err) => console.log("request error", err);

export const simpleGet = () => {
    const path = `${BASE_URL}/test`;
    console.log("API PATH", path);
    return axios.get(path)
    .catch(handleError);
};

export const simplePost = (obj) => {
    console.log("check obj", obj);
    const path = `${BASE_URL}/test`;
    console.log("API PATH", path);
    return axios.post(path, obj)
    .catch(handleError);
};
