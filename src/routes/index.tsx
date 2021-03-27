import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';

import { ROUTES } from './consts';

export const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path={ROUTES.MAIN} component={Dashboard} exact />
            <Redirect to={ROUTES.MAIN} />
        </Switch>
    </BrowserRouter>
);
