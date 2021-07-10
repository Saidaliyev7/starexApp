import { httpClient } from 'httpClient';

import { IRebatesService } from './models';

export const rebatesService: IRebatesService = {
    getRebatesMenu: () => httpClient.get('v1/return-declarations-menu/'),
    getRebates: (page = 0, status?: number) =>
        httpClient.get(`v1/returndeclarations?page=${page}${status ? `&status=${status}` : ''}`),
};
