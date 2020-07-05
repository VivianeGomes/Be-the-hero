import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Register from './pages/Register';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Signin} />
            <Route path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
);


export default Routes;

