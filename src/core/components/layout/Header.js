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
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {

    onLogout = () => {
        this.props.actions.actionLogout();
        //console.log('props', this.props);
        this.props.history.push('/login');
    }

    render() {
        const { t } = this.props;
        return (
            <Navbar color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">Clemessy</Link>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <MyNavLink to='/variabletypes/list'>{t('header.variable_types')}</MyNavLink>
                        </NavItem>
                        <NavItem>
                            <MyNavLink to='/variabletypes/add'>{t('header.add')}</MyNavLink>
                        </NavItem>
                        {this.props.isConnected ? (
                            <>
                                <NavItem>
                                    <NavLink>{`${t('header.hello')} ${this.props.user.name}`}</NavLink>
                                </NavItem><NavItem>
                                    <Button onClick={this.onLogout}>{t('header.logout')}</Button>
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

const Head = withTranslation()(withRouter(Header));

export default connect(mapStateToProps, mapActionsToProps)(Head);