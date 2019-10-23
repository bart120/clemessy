import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
    static propTypes = {
        roles: PropTypes.array.isRequired
    }

    checkRoles() {
        let result = null;
        for (const r in this.props.roles) {
            result = this.props.user.roles.find(x => x === r);
        }
        return result !== null;
    }

    state = {}
    render() {
        const { component: Component, roles, ...rest } = this.props;
        //const Component = this.props.component;

        return (
            <Route {...rest} render={(props) => {
                return (
                    this.props.isConnected && this.checkRoles() ?
                        (<Component />) :
                        (<Redirect to={{ pathname: '/login' }} />)
                )
            }} />
        );
    }
}

const mapStateToProps = (stateStore) => ({
    isConnected: stateStore.isConnected,
    user: stateStore.user
});

export default connect(mapStateToProps)(PrivateRoute);