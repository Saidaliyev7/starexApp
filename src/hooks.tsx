import { EAPIProcessStatus } from 'enums';
import { IAPIData } from 'models';
import { CountriesContext } from 'providers/CountriesProvider';
import { UserInfoContext } from 'providers/UserInfoProvider';
import * as queryString from 'query-string';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory, useLocation } from 'react-router-dom';

export const useUserInfo = () => React.useContext(UserInfoContext);

export const useCountries = () => React.useContext(CountriesContext);

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

export function useSearchParams<T>(defaultParams?: T): [T, (params?: Partial<T>) => void] {
    const history = useHistory();
    const location = useLocation();
    const params = queryString.parse(location.search.trim().replace(/^[?#&]/, ''));

    function setSearchParams(p?: Partial<T>): void {
        history.push({
            ...location,
            search: queryString.stringify({ ...p }, { skipEmptyString: true, skipNull: true }),
        });
    }

    return [{ ...(defaultParams ?? {}), ...params } as any, setSearchParams];
}

export const useIsTabletOrMobileV2 = () => (window.outerWidth > 1024 ? false : true);

export const useOnClickOutside = (ref, handler) => {
    React.useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler],
    );
};
