import { httpClient } from 'httpClient';

import { ICourierService } from './models';

export const courierService: ICourierService = {
    getCourierMenu: () => httpClient.get('v1/courier-menu'),
    getCourierList: (page = 0, status?: number) =>
        httpClient.get(`v1/courier?page=${page}${status ? `&status=${status}` : ''}`),
};
