import _ from "lodash";
import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { updateOrganization } from '../actions';

class UpdateOrganization extends Component {
  componentDidMount() {
    this.props.initialize({ 
      name: this.props.organization.Name,
      taxId: this.props.organization.TaxID,
      addressLine1 : this.props.organization.AddressLine1,
      addressLine2 : this.props.organization.AddressLine2,
      city : this.props.organization.City,
      state : this.props.organization.State,
      zipCode : this.props.organization.ZipCode,
      phoneNumber : this.props.organization.PhoneNumber,
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Update Organization</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-group">
            <label>Organization Name</label>
            <Field label="Organization Name" component="input" type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Tax ID</label>
            <Field label="Tax ID" component="input" type="text" name="taxId" />
          </div>
          <div className="form-group">
            <label>Address Line 1</label>
            <Field label="Address Line 1" component="input" type="text" name="addressLine1" />
          </div>
          <div className="form-group">
            <label>Address Line 2</label>
            <Field label="Address Line 2" component="input" type="text" name="addressLine2" />
          </div>
          <div className="form-group">
            <label>City</label>
            <Field label="City" component="input" type="text" name="city" />
          </div>
          <div className="form-group">
            <label>State</label>
            <Field label="State" component="input" type="text" name="state" />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <Field label="Zip Code" component="input" type="text" name="zipCode" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <Field label="Phone Number" component="input" type="text" name="phoneNumber" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(values) {
    this.props.updateOrganization(values, () => {
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
    form: "UpdateOrganizationForm"
})(connect(mapStateToProps, { updateOrganization })(UpdateOrganization));