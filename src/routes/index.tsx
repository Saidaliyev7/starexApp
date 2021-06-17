import { FullScreenLoading } from 'components/FullLoading';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';

import { ROUTES } from './consts';

const MyOrders = React.lazy(() => import('views/MyOrders'));
const Parcels = React.lazy(() => import('views/Parcels'));
const Courier = React.lazy(() => import('views/Courier'));

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
                    <Route path={ROUTES.BOXES} component={Parcels} />
                    <Route path={ROUTES.COURIER} component={Courier} />
                </React.Suspense>
                
            </Switch>
        )}
        path="/"
    />
);
