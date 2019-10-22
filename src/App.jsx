import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container } from 'reactstrap';
import Header from './core/components/layout/Header';
import Footer from './core/components/layout/Footer';
import Routes from './core/conf/Routes';


class App extends React.Component {

  render() {
    return (

      <Container>
        <Router>
          <Header />
          <Routes />

        </Router>
        <Footer />
      </Container>

    );
  }
}

export default App;
