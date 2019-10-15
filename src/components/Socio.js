import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Socio extends Component {
  render() {
    console.log(this.props.socio);
    return (
      <Card>
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
