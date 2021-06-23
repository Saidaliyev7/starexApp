import { EAPIProcessStatus } from 'enums';
import { IAPIData } from 'models';
import { UserInfoContext } from 'providers/UserInfoProvider';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

export const useUserInfo = () => React.useContext(UserInfoContext);

export const initialAPIData: IAPIData<any> = {
    data: null,
    error: null,
    status: EAPIProcessStatus.IDLE,
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
        setAsyncData((x) => ({ ...x, status: EAPIProcessStatus.PENDING }));
        return service()
            .then((data) => {
                setAsyncData((x) => ({ ...x, data, status: EAPIProcessStatus.SUCCESS }));
                return data;
            })
            .catch((error) => {
                setAsyncData((x) => ({ ...x, error, status: EAPIProcessStatus.ERROR }));
                throw error;
            });
    }

    function reset(): void {
        setAsyncData({ ...initialAPIData });
    }

    return [asyncData, makeRequest, reset, setAsyncData];
}

export const useIsTabletOrMobile = () => useMediaQuery({ query: `(max-width: 1024)` });
