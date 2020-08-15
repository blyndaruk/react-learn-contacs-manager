import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onExpand = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDelete = () => {
    this.props.deleteClickHandler();
    console.log('remove');
    // this.setState({
    //   showContactInfo: !this.state.showContactInfo,
    // });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <div className="card__head d-flex align-items-center">
          <h4
            className="contact-title mb-0"
            role="button"
            onClick={this.onExpand}
          >
            {name}
            <FontAwesomeIcon
              className="ml-2 mb-1"
              title="Edit contact"
              size="xs"
              icon={faSortDown}
            />
          </h4>
          <FontAwesomeIcon
            className="ml-auto"
            title="Remove contact"
            role="button"
            size="lg"
            color="#dc3545"
            icon={faTrashAlt}
            onClick={this.onDelete}
          />
        </div>
        {this.state.showContactInfo
         ? (<ul className="list-group border-0 mt-3">
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
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
