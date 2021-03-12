import React from 'react';

import { Cards, Chart, CountryPicker, Navbar, News } from './components';
import styles from './App.module.css';
import { fetchData, fetchNews } from './api';
import coronaImage from './images/image.png';

function changeState() {
  //changes state to James profile
};

class App extends React.Component {
  state = {
    data: {},
    country: '',
    news: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ ...this.state, data: fetchedData });
  }

  //getting news data from API to display on News component
  async componentDidMount() {
    const fetchedNews = await fetchNews();
    // console.log('fetchedNews', fetchedNews.data);

    // set the news state to use as props
    this.setState({ ...this.state, news: fetchedNews.data.response });
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
      <div>
        <Navbar changeState={changeState}/>
        <div className={styles.container}>
          <img className={styles.image} alt='covid-19' src={coronaImage} />

          <Cards data={data} />
          <hr />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <News docs={news.docs} />
        </div>
      </div>
    );
  }
}

export default App;
