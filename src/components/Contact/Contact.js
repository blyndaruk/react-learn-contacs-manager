import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onClickHandle = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4
          className='contact-title'
          role="button"
          onClick={this.onClickHandle.bind(this, name)}
        >
          {name}
          <FontAwesomeIcon
            className="ml-2 mb-1"
            title="Edit contact"
            size="xs"
            icon={faSortDown}
          />
        </h4>
        {this.state.showContactInfo
         ? (<ul className="list-group border-0">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>)
         : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
