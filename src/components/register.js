import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { register } from '../actions';

class Register extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Email Address</label>
            <Field label="Email Address" component="input" type="text" name="email" />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <Field label="First Name" component="input" type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <Field label="Last Name" component="input" type="text" name="lastName" />
          </div>
          <div className="form-group">
            <label>Organization</label>
            <Field label="Organization" component="input" type="text" name="organizationName" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field label="Password" name="password" component="input" type="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <Field label="Confirm Password" name="confirmPassword" component="input" type="password" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.register(values, () => {
      this.props.history.push('/');
    });
  }
}

function validate(values) {
  const errors = {};
  if(!values.emailAddress) {
    errors.emailAddress = "Email Address must be entered";
  }
}

export default reduxForm({
  validate,
  form: "RegiserForm"
})(connect(null, { register })(Register));
