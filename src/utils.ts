import { ITableData } from 'components/Table/models';
import { EAPIProcessStatus } from 'enums';
import { IAPIData, IApplication, IPaymentTransaction, IRebate } from 'models';

export const getPaymentTransactionsTableData = (
    paymentTransactions: IPaymentTransaction[],
): ITableData<IPaymentTransaction> => ({
    checkComponent: false,
    selectboxData: null,
    thead: ['İzləmə kodu', 'Məbləğ', 'Tarix'],
    tbodyData: paymentTransactions,
});

export const getApplicationsTableData = (
    applications: IApplication[],
    selectBoxData: { name: string; count: number; isActive: boolean; id: number }[],
): ITableData<IApplication> => ({
    checkComponent: false,
    selectboxData: selectBoxData,
    thead: ['Kateqoriya', 'Ölkə', 'Tarix', 'Status', 'Detallı bax'],
    tbodyData: applications,
});

export const getRebatesTableData = (
    rebates: IRebate[],
    selectBoxData: { name: string; count: number; isActive: boolean; id: number }[],
): ITableData<IRebate> => ({
    checkComponent: false,
    selectboxData: selectBoxData,
    thead: [
        'İzləmə kodu',
        'Məhsulun tipi',
        'Mağaza',
        'Çəki',
        'Çatdırılma qiyməti',
        'İadənin statusu',
    ],
    tbodyData: rebates,
});

export const isInitial = (data: IAPIData<any>) => data.status === EAPIProcessStatus.IDLE;

export const isLoading = (data: IAPIData<any>) =>
    data.status === EAPIProcessStatus.PENDING || data.status === EAPIProcessStatus.IDLE;

export const isPending = (data: IAPIData<any>) => data.status === EAPIProcessStatus.PENDING;

export const isSuccess = (data: IAPIData<any>) => data.status === EAPIProcessStatus.SUCCESS;

export const isError = (data: IAPIData<any>) => data.status === EAPIProcessStatus.ERROR;

export const isInitialLoading = (data: IAPIData<any>) => isLoading(data) && data.data === null;

export const isInitialPending = (data: IAPIData<any>) => isPending(data) && data.data === null;
