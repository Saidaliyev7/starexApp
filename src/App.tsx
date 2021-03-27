import { Layout } from 'components/Layout';
import { UserInfoProvider } from 'providers/UserInfoProvider';
import * as React from 'react';
import { Routes } from 'routes';

export default () => {
    return (
        <UserInfoProvider>
            <Layout>
                <Routes />
            </Layout>
        </UserInfoProvider>
    );
};
