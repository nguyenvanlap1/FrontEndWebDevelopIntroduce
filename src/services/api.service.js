import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

const createApiClient = (baseURL = 'http://localhost:3000/api') => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};

export default createApiClient;
