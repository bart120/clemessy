import React from 'react';
import { MyNavLink } from '../link/NavLink';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Button,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/authentication-actions';
import { bindActionCreators } from 'redux';

class Header extends React.Component {

    onLogout = () => {
        this.props.actions.actionLogout();
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">Clemessy</Link>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <MyNavLink to='/variabletypes/list'>Types de variable</MyNavLink>
                        </NavItem>
                        {this.props.isConnected ? (
                            <>
                                <NavItem>
                                    <NavLink>Bonjour {this.props.user.name}</NavLink>
                                </NavItem><NavItem>
                                    <Button onClick={this.onLogout}>Se déconnecter</Button>
                                </NavItem>
                            </>
                        ) : (
                                <NavItem>
                                    <MyNavLink to="/login">Se connecter</MyNavLink>
                                </NavItem>)}

                    </Nav>
                </Collapse >
            </Navbar >
        );
    }
}

const mapStateToProps = (stateStore) => ({
    isConnected: stateStore.isConnected,
    user: stateStore.user
});

const mapActionsToProps = (payload) => ({
    actions: {
        actionLogout: bindActionCreators(logout, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(Header);