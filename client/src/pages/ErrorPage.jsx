import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emojiImage from '../images/covid-emoji.png';
import '../App.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  fourohfour: {
    fontSize: 125,
    fontFamily: '"Chango", cursive'
  },
  oops: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: '"Chango", cursive'
  },
  doesntExist: {
    fontSize: 20,
    fontFamily: '"Chango", cursive'
  },
  covidEmoji: {
    marginTop: 20,
    height: 200,
    width: 200
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
            <Typography className={classes.oops}>Ooops!!!</Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.doesntExist}>That page doesn't exist or is not available.</Typography>
          </Grid>

          <img className={classes.covidEmoji} src={emojiImage} alt='emoji' />
        </Grid>
      </Container>
    </div>
  );
}

export default ErrorPage;
