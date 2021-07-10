import './app.scss';

import { Layout } from 'components/Layout';
import { CountriesProvider } from 'providers/CountriesProvider';
import { UserInfoProvider } from 'providers/UserInfoProvider';
import * as React from 'react';
import { Routes } from 'routes';

export default () => {
    return (
        <UserInfoProvider>
            <CountriesProvider>
                <Layout>
                    <Routes />
                </Layout>
            </CountriesProvider>
        </UserInfoProvider>
    );
};
