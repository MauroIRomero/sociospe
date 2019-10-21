import React, { Component } from "react";
import { connect } from "react-redux";
import { searchSocio } from "../redux/actions/actions";
import Form from "./Form";

class SearchSocio extends Component {
  state = {
    socioId: 0
  };

  handleSubmit = event => {
    event.preventDefault();
    let socioID = this.state.socioId;
    this.props.searchSocio(socioID);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.props.socioState}
        socioId={this.state.socioId}
      />
    );
  }
}

const mapStateToProps = state => ({
  socioState: state
});

const mapActionsToProps = {
  searchSocio
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SearchSocio);
