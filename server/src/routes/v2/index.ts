import { Router } from 'express';

import { CountriesRouter } from './countries';

export const V2_ROUTER = Router();

[
    {
        path: '/countries',
        router: CountriesRouter,
    },
].forEach((x) => {
    V2_ROUTER.use(x.path, x.router);
});
