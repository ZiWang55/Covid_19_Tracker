import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Cards, Chart, CountryPicker, Navbar, News } from "../components";
import styles from "./Home.module.css";
import { fetchData } from "../api";
import coronaImage from "../images/image.png";
import fetchNews from "../components/FetchNews";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

class App extends React.Component {
  state = {
    data: {},
    country: "",
    news: "",
  }

    async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ ...this.state, data: fetchedData });

    const fetchedNews = await fetchNews();
    // console.log('fetchedNews', fetchedNews);

    // set the news state to use as props
    // this.setState({ ...this.state, news: fetchedNews.data.response });
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
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid direction="column" item xs={12} md={4}>
          <Cards data={data} />
        </Grid>

        <Grid direction="column" justify="center" item xs={12} md={8}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />

          <Chart data={data} country={country} />
        </Grid>
      </Grid>

      <hr />

      <News docs={news.docs} />
    </div>
  </div>
  
  );
}
}

export default App;