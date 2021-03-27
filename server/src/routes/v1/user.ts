import { Router } from 'express';

import { DUserData } from '../../mocks/user';

export const UserRouter = Router();

UserRouter.get('/', (_, res) => res.json(DUserData));
