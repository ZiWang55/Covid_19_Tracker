import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import { fetchVaccine } from "../../api";
import styles from "./Cards.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "50px 50px",
    borderRadius: 15,
  },
  grid: {
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [vacs, setVacs] = useState(0);
  /*  console.log('props', props); */
  let totalVacs = 0;

  useEffect( () => {
    async function makeData(){
      let totalVacs = await fetchVaccine();
      console.log("totalVacs", totalVacs);
      setVacs(totalVacs);
      return totalVacs;
    };
    makeData();
  }, []);

  // async function getVacs() {
  //   let totalVacs = await fetchVaccine();
  //   console.log("totalVacs", totalVacs)
  //   return totalVacs
  // }

  // console.log(confirmed);
  const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={classes.root}>
      <Grid container className={styles.card} spacing={1} justify='center'>
        <Grid item style={{height:'100%', width:'100%', margin:'5px'}} component={Card} className={classes.grid}>
          <CardContent className={styles.infected}>
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
        <Grid item style={{height:'100%', width:'100%',margin:'5px'}}  component={Card} className={classes.grid}>
          <CardContent className={styles.recovered}>
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
        <Grid item style={{height:'100%', width:'100%',margin:'5px'}}   component={Card} className={classes.grid}>
          <CardContent className={styles.vaccinations}>
            <Typography color="textSecondary" gutterBottom>
              Vaccination
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={vacs} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of COVID-19 vaccinations
            </Typography>
          </CardContent>
        </Grid>
        <Grid item style={{height:'100%', width:'100%',margin:'5px'}}    component={Card} className={classes.grid}>
          <CardContent className={styles.deaths}>
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
      </Grid>
    </div>
  );
};

export default Cards;
