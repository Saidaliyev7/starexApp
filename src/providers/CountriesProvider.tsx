import { FullScreenLoading } from 'components/FullLoading';
import { useAPIData } from 'hooks';
import { httpClient } from 'httpClient';
import { ICountryInfo } from 'models';
import * as React from 'react';

export interface ICountriesContext {
    countries: ICountryInfo[];
}

export const CountriesContext = React.createContext<ICountriesContext>({ countries: [] });

CountriesContext.displayName = 'All Countries Info';

export const CountriesProvider: React.FC = ({ children }) => {
    const [countries, changeCountries] = useAPIData<ICountryInfo[]>();

    React.useEffect(() => {
        changeCountries(() => httpClient.get('v2/countries/'));
    }, []);

    return (
        <FullScreenLoading
            isLoading={countries.status === 'PENDING' || countries.status === 'IDLE'}
        >
            <CountriesContext.Provider value={{ countries: countries.data }}>
                {children}
            </CountriesContext.Provider>
        </FullScreenLoading>
    );
};
