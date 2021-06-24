import { Router } from 'express';

import { DPaymentPayTR, DPaymentTransactions } from '../../mocks/payments';

export const PaymentRouter = Router();

PaymentRouter.get('/transactions', (_, res) => res.json(DPaymentTransactions));

PaymentRouter.get('/mobile-paytr', (_, res) => res.json(DPaymentPayTR));
