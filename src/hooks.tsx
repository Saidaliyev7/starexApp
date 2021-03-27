import { IAPIData } from 'models';
import { UserInfoContext } from 'providers/UserInfoProvider';
import * as React from 'react';

export const useUserInfo = () => React.useContext(UserInfoContext);

export const initialAPIData: IAPIData<any> = {
    data: null,
    error: null,
    status: 'IDLE',
};

export function useAPIData<T>(
    initAsyncData: IAPIData<any> = { ...initialAPIData },
): [
    IAPIData<T>,
    (service: () => Promise<T>) => Promise<T>,
    () => void,
    (state: IAPIData<T>) => void,
] {
    const [asyncData, setAsyncData] = React.useState<IAPIData<T>>(initAsyncData);

    function makeRequest(service: () => Promise<T>): Promise<T> {
        setAsyncData((x) => ({ ...x, status: 'PENDING' }));
        return service()
            .then((data) => {
                setAsyncData((x) => ({ ...x, data, status: 'SUCCESS' }));
                return data;
            })
            .catch((error) => {
                setAsyncData((x) => ({ ...x, error, status: 'ERROR' }));
                throw error;
            });
    }

    function reset(): void {
        setAsyncData({ ...initialAPIData });
    }

    return [asyncData, makeRequest, reset, setAsyncData];
}
