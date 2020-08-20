import React, { Component } from 'react';
import Provider from './context';

import AddContact from './components/Contacts/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Header from './components/layout/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
