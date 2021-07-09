import { Router } from 'express';

import { DGiftCard, DPaymentPayTR, DPaymentTransactions } from '../../mocks/payments';

export const PaymentRouter = Router();

PaymentRouter.get('/transactions', (_, res) => res.json(DPaymentTransactions));

PaymentRouter.get('/mobile-paytr', (_, res) => res.json(DPaymentPayTR));

PaymentRouter.get('/gift-card', (_, res) => res.json(DGiftCard));
