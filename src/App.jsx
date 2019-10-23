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
import i18next from 'i18next';
import './core/conf/translations';


class App extends React.Component {

  componentDidMount() {
    this.languageSelector();
  }

  languageSelector() {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', i18next.language);
    } else {
      const currentLanguage = localStorage.getItem('language');
      console.log('language', currentLanguage);
      i18next.changeLanguage(currentLanguage);
    }
  }

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
