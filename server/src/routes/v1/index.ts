import { Router } from 'express';

import { OthersRouter } from './others';
import { PaymentRouter } from './payments';
import { TicketsRouter } from './tickets';
import { UserRouter } from './user';

export const V1_ROUTER = Router();

[
    {
        path: '/user',
        router: UserRouter,
    },
    {
        path: '/payment',
        router: PaymentRouter,
    },
    {
        path: '/tickets',
        router: TicketsRouter,
    },
    {
        path: '/',
        router: OthersRouter,
    },
].forEach((x) => {
    V1_ROUTER.use(x.path, x.router);
});
