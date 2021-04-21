import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import Home from '../pages/Home';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' component = {Home} exact/>
                <Route path = '/signin' component = {SignInPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;