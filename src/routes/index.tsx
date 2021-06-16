import { FullScreenLoading } from 'components/FullLoading';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';

import { ROUTES } from './consts';

const MyOrders = React.lazy(() => import('views/MyOrders'));

export const Routes: React.FC = () => (
    <Route
        render={() => (
            <Switch>
                <Route exact path="/">
                    <Redirect to={ROUTES.MAIN} />
                </Route>
                <Route exact path={ROUTES.MAIN} component={Dashboard} />
                <React.Suspense fallback={<FullScreenLoading isLoading={true} />}>
                    <Route path={ROUTES.MY_ORDERS} component={MyOrders} />
                </React.Suspense>
            </Switch>
        )}
        path="/"
    />
);
