import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Email Address</label>
            <Field label="Email Address" component="input" type="text" name="userName" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Field label="Password" name="password" component="input" type="password" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    this.props.login(values, (result) => {
      localStorage.setItem('token', result.data.access_token);
      this.props.history.push('/organization');
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
  form: "LoginForm"
})(connect(null, { login })(Login));
