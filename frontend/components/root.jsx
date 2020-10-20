import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
                <Route path="/" component={App} />
            </Switch>

            
        </HashRouter>
    </Provider>
);

export default Root;
