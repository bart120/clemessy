
import React from 'react';
import { Spinner } from 'reactstrap';


class SuspenseSpinner extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
            </div>
        );
    }
}

export default SuspenseSpinner;