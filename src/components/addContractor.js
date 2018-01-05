import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addContractor } from '../actions';

class AddContractor extends Component {
  render(){
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>Invite Contractor</div>
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
          <div>
            <button type="submit" className="btn btn-primary">Invite</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    this.props.addContractor(values, () => {
      this.props.history.push('/organization');
    });
  }
}

export default reduxForm({
  form: "AddContractorForm"
})(connect(null, { addContractor })(AddContractor));