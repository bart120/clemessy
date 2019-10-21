import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container } from 'reactstrap';
import Header from './core/components/layout/Header';

class App extends React.Component {

  render() {
    return (

      <Container>
        <Header />
      </Container>

    );
  }
}

export default App;
