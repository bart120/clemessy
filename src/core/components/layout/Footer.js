import React from 'react';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Footer extends React.Component {

    state = {
        variableTypes: null
    };

    constructor(props) {
        super(props)
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            variableTypes: [
                {
                    code: "TYP0",
                    entity: "TOR"
                },
                {
                    code: "TYP1",
                    entity: "TOR",
                },
                {
                    code: "TYP2",
                    entity: "ANA",
                }
            ]
        });
    }

    componentDidCatch(error, info) {

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    displayTitle = () => {
        return (
            this.state.variableTypes !== null ?
                (<h3>TOP {this.state.variableTypes.length}</h3>) :
                (<h3>chargement...</h3>));
    }

    render() {
        console.log('render');
        return (

            <>
                <this.displayTitle />
                {this.state.variableTypes !== null ? (
                    <Row>
                        {this.state.variableTypes.map((obj, index) =>
                            <Col key={`code-${index}`}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{obj.code}</CardTitle>
                                        <CardSubtitle>{obj.entity}</CardSubtitle>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                    </Row>
                ) : (<></>)}
            </>
        );
    }
}

export default Footer;