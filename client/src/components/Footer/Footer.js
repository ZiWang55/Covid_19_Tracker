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





import './Footer.css'

const Footer = () => {
  return (
    <div className="superContainer">
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex" id='footer-title'>
                
              <span>Covid-19 Tracker</span>
            </div>
            <div className="d-flex">
              
            </div>
            <div className="d-flex">
             
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
           
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://covid-track3r-app.herokuapp.com/"}
                quote={"Real Time Live Data: Tracking COVID-19"}
                hashtag="#COVID-19"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <span className="pt-3 text-center">
              Copyright{" "}&copy;
              {" " + new Date().getFullYear() }
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
