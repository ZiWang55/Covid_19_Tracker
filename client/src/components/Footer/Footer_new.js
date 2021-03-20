import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import {
  Typography,
  CssBaseline,
  Container,
 
} from "@material-ui/core";

import useStyles from "./styles";


const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      
      <Container className={classes.superContainer}>
      <footer className={classes.footer}>
        <Typography variant="h6" align="left" gutterBottom>
         Covid-19 Tracker
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary">
        Copyright{" "}&copy;
              {" " + new Date().getFullYear() }
        </Typography>
        <div>
              <FacebookShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <FacebookIcon size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <TwitterIcon size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <RedditIcon size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <LinkedinIcon size={36} />
              </LinkedinShareButton>
              
            </div>
           
            </footer>
      </Container>
     
    </>
  );
};

export default Footer;
