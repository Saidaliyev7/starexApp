import { FullScreenLoading } from 'components/FullLoading';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ApplicationCategoriesProvider } from 'views/Applications/ApplicationCategoriesProvider';
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
const Notifications = React.lazy(() => import('views/Notifications'));
const Satisfaction = React.lazy(() => import('views/Satisfaction'));
const Declare = React.lazy(() => import('views/Declare'));
const ApplicationChat = React.lazy(() => import('views/Applications/ApplicationChat'));
const ApplicationForm = React.lazy(() => import('views/Applications/ApplicationForm'));
export const Routes: React.FC = () => (
    <Route
        render={() => (
            <Switch>
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
                    <Route path={ROUTES.NOTIFICATIONS} component={Notifications} />
                    <Route path={ROUTES.SATISFACTION} component={Satisfaction} />
                    <Route path={ROUTES.DECLARE} component={Declare} />
                    <ApplicationCategoriesProvider>
                        <Route path={ROUTES.APPLICATION_CHAT} component={ApplicationChat} />
                        <Route path={ROUTES.APPLICATION_FORM} component={ApplicationForm} />
                    </ApplicationCategoriesProvider>
                </React.Suspense>
                <Redirect to={ROUTES.MAIN} />
            </Switch>
        )}
        path="/"
    />
);
