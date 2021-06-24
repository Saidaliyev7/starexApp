import { FullScreenLoading } from 'components/FullLoading';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';

import { ROUTES } from './consts';

const MyOrders = React.lazy(() => import('views/MyOrders'));
const Parcels = React.lazy(() => import('views/Parcels'));
const Courier = React.lazy(() => import('views/Courier'));
const Rebates = React.lazy(() => import('views/Rebates'));
const Applications = React.lazy(() => import('views/Applications'));
const Balance = React.lazy(() => import('views/Balance'));
const IncreaseBalance = React.lazy(() => import('views/Balance/IncreaseBalance'));
const BalancePayTR = React.lazy(() => import('views/Balance/BalancePayTR'));
const ForeignAdresses = React.lazy(() => import('views/ForeignAdresses'));
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
                    <Route path={ROUTES.REBATES} component={Rebates} />
                    <Route path={ROUTES.APPLICATIONS} component={Applications} />
                    <Route path={ROUTES.BALANCE} component={Balance} />
                    <Route path={ROUTES.BALANCE_INCREASE} component={IncreaseBalance} />
                    <Route path={ROUTES.BALANCE_PAY_TR} component={BalancePayTR} />
                    <Route path={ROUTES.FOREIGN_ADDRESSES} component={ForeignAdresses} />
                </React.Suspense>
            </Switch>
        )}
        path="/"
    />
);
