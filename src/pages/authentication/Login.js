import React from 'react';
import LoginForm from '../../core/authentication/LoginForm';
import { AuthenticationService } from '../../services/AuthenticationService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logon } from '../../redux/actions/authentication-actions';

class Login extends React.Component {
    state = {
        username: ''
    }

    serv = new AuthenticationService();

    onLogin = (obj) => {
        this.serv.authenticate(obj).then((user) => {
            //alert(`Bonjour ${user.name}`);
            this.props.actions.actionLogon(user);
        });

    }

    render() {
        return (
            <>
                <h3>Authentification</h3>
                <LoginForm username='admin' password="admin" onLogin={this.onLogin} />
            </>
        );
    }
}

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogon: bindActionCreators(logon, payload)
    }
});

export default connect(null, mapActionsToProps)(Login);