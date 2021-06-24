import { httpClient } from 'httpClient';

import { IPaymentService } from './models';

const BASE_URL = 'v1/payment';

export const paymentService: IPaymentService = {
    getTransactions: (page = 1) => httpClient.get(`${BASE_URL}/transactions?page=${page}`),
    getPaymentPayTR: (amount: number, currency: 'TL' | 'USD') =>
        httpClient.get(`${BASE_URL}/mobile-paytr?amount=${amount}&currency=${currency}`),
};
