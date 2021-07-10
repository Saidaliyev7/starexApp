import {
    IApplication,
    IApplicationCategories,
    IApplicationStatus,
    ICourierList,
    IPagination,
    IPaymentPayTR,
    IPaymentTransaction,
    IRebateList,
    IUser,
} from 'models';

export interface IAuthService {
    logout: () => void;
    getCurrentUser: () => Promise<IUser>;
}

export interface INotificationService {
    getNotificationsCount: () => Promise<{ unread_count: number }>;
}

export interface IPaymentService {
    getTransactions: (page?: number) => Promise<IPagination<IPaymentTransaction>>;
    getPaymentPayTR: (amount: number, currency: 'TL' | 'USD') => Promise<IPaymentPayTR>;
}

export interface IApplicationService {
    getTicketList: (page?: number, status_id?: number) => Promise<IPagination<IApplication>>;
    getTicketCategories: () => Promise<IApplicationCategories>;
    getTicketStatuses: () => Promise<{ all: number; data: IApplicationStatus[] }>;
    getTicket: (id: string) => Promise<IApplication>;
    sendMessage: (id: string, message: FormData) => Promise<unknown>;
}

export interface IRebatesService {
    getRebatesMenu: () => Promise<{
        all: number;
        data: { name: string; id: number; count: number }[];
    }>;

    getRebates: (page?: number, status?: number) => Promise<IRebateList>;
}

export interface ICourierService {
    getCourierMenu: () => Promise<{
        all: number;
        data: { name: string; id: number; count: number }[];
    }>;
    getCourierList: (page?: number, status?: number) => Promise<ICourierList>;
}
