import { Router } from 'express';

import { V1_ROUTER } from './v1';
import { V2_ROUTER } from './v2';

export const BASE_ROUTER = Router();

BASE_ROUTER.use('/v1', V1_ROUTER);
BASE_ROUTER.use('/v2', V2_ROUTER);
