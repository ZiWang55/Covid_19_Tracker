import React from "react";
import { Container, Grid } from "@material-ui/core";
import Iframe from "../components/Iframe/Iframe";

function Members() {

  return (
    <Container>
      <Grid container direction="column">
          <Iframe />
      </Grid>
    </Container>
  );
}

export default Members;