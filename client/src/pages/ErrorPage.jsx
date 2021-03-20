import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  fourohfour: {
    fontSize: 150
  },
  oops: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  doesntExist: {
    fontSize: 20
  }
}));

function ErrorPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container direction='column' alignItems='center' justify='center' spacing={2}>
          <Grid item>
            <Typography className={classes.fourohfour}>404 Error</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.oops}>Oooops!!!</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.doesntExist}>That page doesn't exist or is not available.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ErrorPage;
