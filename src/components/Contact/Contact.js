import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4 className='contact'>{name}</h4>
        <ul className="list-group border-0">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
