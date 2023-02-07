import axios from 'axios';

const instance = axios.create({
    baseURL: `https://3a7hqny1by.api.quickmocker.com`,
});

export default {
    getAllMyTask: () =>
        instance({
            method: `GET`,
            url: `todos/mytask`,
        }),
    getAllUrgent: () =>
        instance({
            method: `GET`,
            url: `todos/urgent`,
        }),
    getAllPersonal: () =>
        instance({
            method: `GET`,
            url: `todos/personal`,
        }),
}