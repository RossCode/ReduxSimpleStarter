import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getContractors, getOrganization } from "../actions";


class Organization extends Component {
  componentDidMount() {
    this.props.getContractors();
    this.props.getOrganization();
  }

  renderContractors() {
    if (!this.props.contractor) {
      return <div>None</div>;
    }
    return _.map(this.props.contractors, contractor => {
      return (
        <li className="list-group-item" key={contractor.id}>
          {contractor.FirstName} {contractor.LastName}
        </li>
      );
    });
  }

  render() {
    const { organization } = this.props;

    console.log(this.props);
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
