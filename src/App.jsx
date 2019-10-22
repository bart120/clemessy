import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container } from 'reactstrap';
import Footer from './core/components/layout/Footer';
import Routes from './core/conf/Routes';
import SuspenseSpinner from './core/components/suspense/SuspenseSpinner';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './core/components/layout/Header';


class App extends React.Component {

  render() {
    return (

      <Container>
        <Provider store={store}>
          <Router>
            <Header />
            <Suspense fallback={(<SuspenseSpinner />)}>
              <Routes />
            </Suspense>
          </Router>
          <Footer />
        </Provider>
      </Container >

    );
  }
}

export default App;
