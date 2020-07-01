import React, { Component, Fragment } from 'react';
import Contact from '../Contact/Contact';

class Contacts extends Component {

  state = {
    contacts: [
      {
        id: '1',
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
      },
      {
        id: '2',
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '8-800-5555',
      },
      {
        id: '3',
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-3333',
      },
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        {contacts.map((contact) =>
          <Contact
            key={contact.id}
            contact={contact}
          />
        )}
      </Fragment>
    );
  }
}

export default Contacts;
