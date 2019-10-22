import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import VariableTypesList from '../../pages/variable-types/VariableTypesList';

const Login = React.lazy(() => import('../../pages/authentication/Login'));


class Routes extends React.Component {
    render() {
        return (
            <>
                <Route path='/' exact component={Home} />
                <Route path='/variabletypes/list' exact component={VariableTypesList} />
                <Route path='/login' exact component={Login} />
            </>
        );
    }
}

export default Routes;