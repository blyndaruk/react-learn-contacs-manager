import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name"
                value={name}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
                value={email}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone"
                value={phone}
                onChange={this.onInputChange}
              />
            </div>
            <input type="submit" value="Add contact" className="btn btn-light btn-block" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
