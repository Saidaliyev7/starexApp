import { Router } from 'express';

export const NotificationRouter = Router();

NotificationRouter.get('/get-notifications', (_, res) => res.json({ unread_count: 1 }));
