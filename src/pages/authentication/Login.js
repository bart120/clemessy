import React from 'react';
import LoginForm from '../../core/authentication/LoginForm';

class Login extends React.Component {
    state = {
        username: ''
    }

    onLogin = (obj) => {
        console.log(obj);
    }

    render() {
        return (
            <>
                <h3>Authentification</h3>
                <LoginForm username='toto@gmail.com' onLogin={this.onLogin} />
            </>
        );
    }
}

export default Login;