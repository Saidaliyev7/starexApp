import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';

import { ROUTES } from './consts';

// const MyOrders=React.lazy(()=>import("views/MyOrders"))


export const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path={ROUTES.MAIN} component={Dashboard} exact />
            {/* <Route path={ROUTES.MY_ORDERS} component={MyOrders}  /> */}
            <Redirect to={ROUTES.MAIN} />
        </Switch>
    </BrowserRouter>
);
