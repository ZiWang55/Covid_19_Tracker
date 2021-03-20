import React, { useContext } from "react";
import UserContext from '../api/UserContext';
import { Redirect } from 'react-router-dom';
import { Container, Grid } from "@material-ui/core";
import Iframe from "../components/Iframe/Iframe";

function Members() {
  let user = useContext(UserContext);

  return (
    <>
    {user.authenticated === true ? (
    <Container>
      <Grid container direction="column">
          <Iframe />
      </Grid>
    </Container>
    )
    :
    (
      <Redirect to="/page404" />
    )}
    </>
  );
}

export default Members;