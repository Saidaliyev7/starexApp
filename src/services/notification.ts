import { httpClient } from 'httpClient';

import { INotificationService } from './models';

export const notificationService: INotificationService = {
    getNotificationsCount: () => httpClient.get('v1/get-notifications/'),
};
