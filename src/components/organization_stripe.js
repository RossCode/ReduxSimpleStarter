import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { registerOrganizationWithStripe } from '../actions';

class RegisterOrganizationWithStripe extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Update Organization</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Bank Account Number</label>
            <Field label="Account Number" component="input" type="text" name="accountNumber" />
          </div>

          <div className="form-group">
            <label>Routing Number</label>
            <Field label="Routing Number" component="input" type="text" name="routingNumber" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    this.props.registerOrganizationWithStripe(values, () => {
      this.props.history.push("/organization");
    });
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    organization: state.organization
  };
}

export default reduxForm({
    form: "RegisterOrganizationWithStripeForm"
})(connect(mapStateToProps, { registerOrganizationWithStripe })(RegisterOrganizationWithStripe));
