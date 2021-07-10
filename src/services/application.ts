import { httpClient } from 'httpClient';

import { IApplicationService } from './models';

const BASE_URL = 'v1/tickets';

export const applicationService: IApplicationService = {
    getTicketList: (page = 0, status_id?: number) =>
        httpClient.get(`${BASE_URL}?page=${page}${status_id ? `&status_id=${status_id}` : ''}`),
    getTicketCategories: () => httpClient.get(`${BASE_URL}/categories`),
    getTicketStatuses: () => httpClient.get(`${BASE_URL}/statuses`),
    getTicket: (id: string) => httpClient.get(`${BASE_URL}/${id}`),
    sendMessage: (id: string, message: FormData) =>
        httpClient.post(`${BASE_URL}/${id}/messages/`, message),
};
