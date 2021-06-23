import { httpClient } from 'httpClient';

import { IPaymentService } from './models';

const BASE_URL = 'v1/payment';

export const paymentService: IPaymentService = {
    getTransactions: (page = 1) => httpClient.get(`${BASE_URL}/transactions?page=${page}`),
};
