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
const Balance =React.lazy(() => import('views/Balance'));
const ForeignAdresses = React.lazy(()=>import('views/ForeignAdresses'));
const Notifications = React.lazy(()=>import('views/Notifications'));
const Satisfaction =React.lazy(()=>import('views/Satisfaction'));
const Declare =React.lazy(()=>import('views/Declare'));
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
                    <Route path={ROUTES.FOREIGN_ADDRESSES} component={ForeignAdresses} />
                    <Route path={ROUTES.NOTIFICATIONS} component={Notifications} />
                    <Route path={ROUTES.SATISFACTION} component={Satisfaction} />
                    <Route path={ROUTES.DECLARE} component={Declare} />
                </React.Suspense>
                
            </Switch>
        )}
        path="/"
    />
);
