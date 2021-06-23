import { Router } from 'express';

import { NotificationRouter } from './notification';
import { PaymentRouter } from './payments';
import { UserRouter } from './user';

export const V1_ROUTER = Router();

[
    {
        path: '/user',
        router: UserRouter,
    },
    {
        path: '/',
        router: NotificationRouter,
    },
    {
        path: '/payment',
        router: PaymentRouter,
    },
].forEach((x) => {
    V1_ROUTER.use(x.path, x.router);
});
