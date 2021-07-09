import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

class HttpClient {
    baseUrl = '/api';

    constructor() {
        const token = Cookie.get('sessionId');
        if (token) {
            axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        }
    }

    get(url: string, config?: AxiosRequestConfig) {
        return axios.get(`${this.baseUrl}/${url}`, config).then((response) => response.data);
    }

    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return axios.post(`${this.baseUrl}/${url}`, data, config).then((response) => response.data);
    }

    update(url: string, data?: any, config?: AxiosRequestConfig) {
        return axios
            .patch(`${this.baseUrl}/${url}`, data, config)
            .then((response) => response.data);
    }

    delete(url: string, config?: AxiosRequestConfig) {
        return axios.delete(`${this.baseUrl}/${url}`, config).then((response) => response.data);
    }
}

export const httpClient = new HttpClient();
