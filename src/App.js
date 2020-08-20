import React, { Component } from 'react';
import Provider from './context';

import Contacts from './components/Contacts/Contact';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
