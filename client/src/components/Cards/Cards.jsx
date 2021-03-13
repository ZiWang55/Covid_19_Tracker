import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(1),
    margin: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  /*  console.log('props', props); */

  // console.log(confirmed);
  const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={classes.root}>
      <Grid item component={Card} className={classes.grid}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of activate cases of COVID-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={classes.grid}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of recoveries from COVID-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        className={classes.grid}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Vaccination
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of COVID-19 vaccinations
          </Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={classes.grid}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by COVID-19
          </Typography>
        </CardContent>
      </Grid>
    </div>
  );
};

export default Cards;
