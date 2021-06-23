import { ITableData } from 'components/Table/models';
import { EAPIProcessStatus } from 'enums';
import { IAPIData, IPaymentTransaction } from 'models';

export const getPaymentTransactionsTableData = (
    paymentTransactions: IPaymentTransaction[],
): ITableData<IPaymentTransaction> => ({
    checkComponent: false,
    selectboxData: null,
    thead: ['İzləmə kodu', 'Məbləğ', 'Tarix'],
    tbodyData: paymentTransactions,
});

export const isInitial = (data: IAPIData<any>) => data.status === EAPIProcessStatus.IDLE;

export const isLoading = (data: IAPIData<any>) =>
    data.status === EAPIProcessStatus.PENDING || data.status === EAPIProcessStatus.IDLE;

export const isPending = (data: IAPIData<any>) => data.status === EAPIProcessStatus.PENDING;

export const isSuccess = (data: IAPIData<any>) => data.status === EAPIProcessStatus.SUCCESS;

export const isError = (data: IAPIData<any>) => data.status === EAPIProcessStatus.ERROR;

export const isInitialLoading = (data: IAPIData<any>) => isLoading(data) && data.data === null;

export const isInitialPending = (data: IAPIData<any>) => isPending(data) && data.data === null;
