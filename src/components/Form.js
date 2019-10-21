import React, { Component } from "react";
import Socio from "./Socio";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

class Form extends Component {
  render() {
    const { loading, socio, errors } = this.props.state;
    const { socioId } = this.props;
    return (
      <Grid container className="form">
        <Grid item sm />
        <Grid item sm>
          <h1>Socios Peñarol</h1>
          <form onSubmit={this.props.handleSubmit}>
            <TextField
              id="socioId"
              name="socioId"
              label="Ingrese DNI/Nro Socio"
              type="search"
              margin="normal"
              helperText={errors.socioID}
              error={errors.socioID ? true : false}
              value={socioId !== 0 ? socioId : ""}
              onChange={this.props.handleChange}
              required
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
export default Form;
