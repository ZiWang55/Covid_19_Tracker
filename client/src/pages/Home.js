import React from 'react';

import { Cards, Chart, CountryPicker, Navbar, News } from '../components';
import styles from './Home.module.css';
import { fetchData } from '../api';
import coronaImage from '../images/image.png';
import fetchNews from '../components/FetchNews';

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
      <div>
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