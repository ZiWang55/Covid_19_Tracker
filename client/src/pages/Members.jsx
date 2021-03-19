import React, { useState } from "react";
import API from "../api/Users";
import {
  TextField,
  Button,
  Typography,
  ButtonGroup,
  Container,
  Grid,
} from "@material-ui/core";
import Iframe from "../components/Iframe/Iframe";
import News from "../components/News/News";

function Members() {

  return (
    <Container>
      <Grid container direction="column">
          <Iframe />
      </Grid>
      <Grid>
        <News />
      </Grid>
    </Container>
  );
}

export default Members;