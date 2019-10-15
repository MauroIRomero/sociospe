import React, { Component } from "react";
import { connect } from "react-redux";
import { searchSocio } from "../redux/actions";
import Socio from "./Socio.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class SearchSocio extends Component {
  state = {
    socioId: 0,
    socio: null,
    loading: false,
    errors: {}
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let socioID = this.state.socioId;
    this.setState({
      socioId: 0,
      loading: true,
      errors: {}
    });
    axios
      .get(`/socio/${this.state.socioId}`)
      .then(res => {
        this.setState({
          socio: res.data,
          loading: false
        });
        this.props.searchSocio(socioID);
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          socio: null,
          loading: false
        });
      });
  };
  render() {
    const { socioId, socio, errors, loading } = this.state;
    return (
      <Grid container className="form">
        <Grid item sm />
        <Grid item sm>
          <h1>Socios Peñarol</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="socioId"
              name="socioId"
              label="Ingrese DNI/Nro Socio"
              type="search"
              margin="normal"
              helperText={errors.socioID}
              error={errors.socioID ? true : false}
              value={socioId !== 0 ? socioId : ""}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              Buscar
              {loading && <CircularProgress size={30} className="progress" />}
            </Button>
            <br />
            <br />
            {socio ? <Socio socio={socio} /> : null}
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  socioState: state
});

const mapDispatchToProps = dispatch => ({
  searchSocio: socioID => {
    dispatch(searchSocio(socioID));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSocio);
