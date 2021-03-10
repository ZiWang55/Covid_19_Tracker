import React from "react";

import { Cards, Chart, CountryPicker, Navbar } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png"

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log('fetcheddata',fetchedData);    
  
    // set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Navbar />

        <img className={styles.image} alt="covid-19" src={coronaImage} />
        
        <Cards data={data} />
        <hr />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
