import React from 'react';
import { Table, Button } from 'reactstrap';
import { VariableTypesService } from '../../services/VariableTypesService';


class VariableTypesList extends React.Component {
    serv = new VariableTypesService();

    state = { data: [] }

    componentDidMount() {
        this.serv.getAll().then(data => this.setState({ data: data._embedded.variableTypes }));
    }

    onDetail(code) {
        this.props.history.push(`/variabletypes/detail/${code}`);
    }

    render() {
        return (
            <>
                <h3>Types de variable</h3>
                <Table dark>
                    <thead>
                        <tr>
                            <th>code</th>
                            <th>entity Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((e, index) =>
                            (<tr>
                                <th scope="row">{e.code}</th>
                                <td>{e.entity}</td>
                                <td><Button onClick={() => this.onDetail(e.code)}>Détail</Button></td>
                            </tr>)
                        )}

                    </tbody>
                </Table>
            </>
        );
    }
}

export default VariableTypesList;