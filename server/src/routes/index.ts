import { Router } from 'express';

import { V1_ROUTER } from './v1';

export const BASE_ROUTER = Router();

BASE_ROUTER.use('/v1', V1_ROUTER);
