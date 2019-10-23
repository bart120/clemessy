import React, { Component } from 'react';

class VariableTypesDetail extends Component {
    state = { code: '' }

    componentDidMount() {
        this.setState({ code: this.props.match.params.id });
    }

    render() {
        return (
            <div>{this.state.code}</div>
        );
    }
}

export default VariableTypesDetail;