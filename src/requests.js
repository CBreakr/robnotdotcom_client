
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const handleError = (err) => console.log("request error", err);

export const simpleGet = () => {
    return axios.get(`${BASE_URL}/test`)
    .catch(handleError);
};

export const simplePost = (obj) => {
    console.log("check obj", obj);
    return axios.post(`${BASE_URL}/test`, obj)
    .catch(handleError);
};
