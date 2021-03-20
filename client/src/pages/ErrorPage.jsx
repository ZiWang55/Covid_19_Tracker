import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
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
  }
}));

function ErrorPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <Typography className={classes.fourohfour}>404 Error</Typography>
          </Grid>

          <Grid item>
            <Typography>Oooops!!!</Typography>
          </Grid>
          <Grid item>
            <Typography>That page doesn't exist or is not available.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ErrorPage;
