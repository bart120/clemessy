import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container } from 'reactstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';

class App extends React.Component {

  render() {
    return (

      <Container>
        <Header />
        <Footer />
      </Container>

    );
  }
}

export default App;
