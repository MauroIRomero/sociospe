import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import escudo from "../assets/icon.ico";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Socio extends Component {
  render() {
    return (
      <Card>
        <CardMedia className="escudo-container">
          <img src={escudo} alt="pe" style={{ height: "100px" }} />
        </CardMedia>
        <CardContent>
          <Typography variant="h5">
            {this.props.socio.apellido}, {this.props.socio.nombre}
          </Typography>
          <Typography variant="body1">
            {this.props.socio.al_dia ? "Al dia" : "Debe cuota"}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Socio;
