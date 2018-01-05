import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getContractors, getOrganization } from "../actions";
import AddContractor  from './addContractor';


class Organization extends Component {
  componentDidMount() {
    this.props.getContractors();
    this.props.getOrganization();
  }

  renderContractors() {
    const { contractors } = this.props;

    if (!contractors) {
      return <div>None</div>;
    }

    return _.map(contractors, contractor => {
      return (
        <li className="list-group-item" key={contractor.ContractorId}>
          {contractor.FirstName} {contractor.LastName}
        </li>
      );
    });
  }

  render() {
    const { organization } = this.props;

    if (!organization) {
      return (
        <div> Loading...</div>
      );
    }

    return (
      <div>
        <h2>{organization.Name}</h2>
        <h3>Contractors</h3>
        <ul className="list-group">
          {this.renderContractors()}
        </ul>
        <Link to="/organization/update">Update Organization</Link>
        <Link to="/organization/stripe">Register Organization with Stripe</Link>
        <AddContractor />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    contractors: state.contractors,
    organization: state.organization
  };
}

export default connect(mapStateToProps, { getContractors, getOrganization })(Organization);
