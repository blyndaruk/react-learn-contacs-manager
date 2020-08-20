import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Consumer } from '../../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  expandToggle = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDelete = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
    console.log('remove');
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <div className="card__head d-flex align-items-center">
                <h4
                  className="contact-title mb-0"
                  role="button"
                  onClick={this.expandToggle}
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
                  onClick={this.onDelete.bind(this, id, dispatch)}
                />
              </div>
              {this.state.showContactInfo
               ? (<ul className="list-group border-0 mt-3">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>)
               : null}
            </div>
          )
        }}

      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
