import React from "react";
import { Cards, Chart, CountryPicker, News } from "../components";
import styles from "./Home.module.css";
import { fetchData } from "../api";
import coronaImage from "../images/image.png";
import fetchNews from "../components/FetchNews";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

import Footer from '../components/Footer/Footer'

import Footer_new from '../components/Footer/Footer_new';

class App extends React.Component {
  state = {
    data: {},
    country: "",
    news: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ ...this.state, data: fetchedData });

    // const fetchedNews = await fetchNews();
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log('fetcheddata', fetchedData);

    // set the state
    this.setState({ ...this.state, data: fetchedData, country });
  };

  render() {
    const { data, country, news } = this.state;
    return (
      <div className={classNames.root}>
        <div className={styles.container}>
          <img className={styles.image} alt="covid-19" src={coronaImage} />

          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={12} md={4}>
              <Cards data={data} />
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: "10vh" }}
              >
                <CountryPicker handleCountryChange={this.handleCountryChange} />
              </Grid>

              <Chart data={data} country={country} />
            </Grid>
          </Grid>

          <hr />

          <News docs={news.docs} />
         
        </div>
             <Footer_new/>
      </div>
    );
  }
}

export default App;
