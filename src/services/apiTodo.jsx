import axios from 'axios';

const instance = axios.create({
    baseURL: `https://3a7hqny1by.api.quickmocker.com`,
});

export default {
    getAll: () =>
        instance({
            method: `GET`,
            url: `todos`,
        })
}