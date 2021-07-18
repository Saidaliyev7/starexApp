import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
// import { envService } from 'services/env';

class HttpClient {
    baseUrl = '/api';

    constructor() {
        const token = Cookie.get('sessionid');
        if (token) {
            axios.defaults.headers['Authorization'] = `Token ${token}`;
        }

        // if (envService.profile === 'dev') {
        //     this.baseUrl = 'https://dev.starex.az/api';
        // } else if (envService.profile === 'prod') {
        //     this.baseUrl = 'https://starex.az/api';
        // }
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
