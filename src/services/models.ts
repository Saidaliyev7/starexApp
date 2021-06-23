import { IPagination, IPaymentTransaction, IUser } from 'models';

export interface IAuthService {
    logout: () => void;
    getCurrentUser: () => Promise<IUser>;
}

export interface INotificationService {
    getNotificationsCount: () => Promise<{ unread_count: number }>;
}

export interface IPaymentService {
    getTransactions: (page?: number) => Promise<IPagination<IPaymentTransaction>>;
}
