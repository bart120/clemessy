import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import { VariableList, VariableAdd } from '../../pages/variable-types';
import PrivateRoute from '../components/route/PrivateRoute';


const Login = React.lazy(() => import('../../pages/authentication/Login'));


class Routes extends React.Component {
    render() {
        return (
            <>
                <Route path='/' exact component={Home} />
                <Route path='/variabletypes/list' exact component={VariableList} />
                <PrivateRoute path='/variabletypes/add' exact component={VariableAdd} roles={['ROLE_ADMIN']} />
                <Route path='/login' exact component={Login} />
            </>
        );
    }
}

export default Routes;