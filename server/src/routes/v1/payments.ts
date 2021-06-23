import { Router } from 'express';

import { DPaymentTransactions } from '../../mocks/payments';

export const PaymentRouter = Router();

PaymentRouter.get('/transactions', (_, res) => res.json(DPaymentTransactions));
