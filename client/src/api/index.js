import axios from 'axios';
require('dotenv').config({ path: '../../.env' });

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchVaccine = async () => {
  let totalVacs = 0;
  try {
    const data = await axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json');
    // console.log('vac data', data);

    let continents = data.data.filter(
      (continent) =>
        continent.country === 'Africa' ||
        continent.country === 'Asia' ||
        continent.country === 'North America' ||
        continent.country === 'South America' ||
        continent.country === 'Europe' ||
        continent.country === 'Australia' ||
        continent.country === 'Antarctica'
    );
    // console.log('continents', continents);

    for (let i = 0; i < continents.length; i++) {
      totalVacs += parseInt(continents[i].data[continents[i].data.length - 1].total_vaccinations);
      /* console.log("our data", data.data[i].data[data.data[i].data.length - 1].total_vaccinations) */
    }
    // console.log('total', totalVacs);
    return totalVacs;
  } catch (error) {
    console.log(error);
  }
};
