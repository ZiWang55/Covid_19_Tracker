import React from 'react';
import styles from './Iframe.module.css';

const Iframe = ( source ) => {

    if (!source) {
        return <div>Loading...</div>;
    }
    
    return (
            <div>
              <iframe title="hospitalized" src="https://ourworldindata.org/grapher/current-covid-patients-hospital" className={styles.Iframe}></iframe>
              <iframe title="confirmed" src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=40..latest&pickerSort=desc&pickerMetric=new_cases_per_million&Metric=Confirmed+cases&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=IND~USA~GBR~CAN~DEU~FRA&hideControls=true" className={styles.Iframe}></iframe>
              <iframe title="deaths" src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&time=40..latest&pickerSort=desc&pickerMetric=new_deaths_per_million&Metric=Confirmed+deaths&Interval=7-day+rolling+average&Relative+to+Population=true&Align+outbreaks=false&country=IND~USA~GBR~CAN~DEU~FRA&hideControls=true" className={styles.Iframe}></iframe>
              <iframe title="vacs1" src='https://ourworldindata.org/grapher/us-daily-covid-vaccine-doses-administered?tab=chart&stackMode=absolute&time=earliest..latest&country=~USA&region=World' className={styles.Iframe}></iframe>
              <iframe title="vacs2" src='https://ourworldindata.org/grapher/us-total-covid-19-vaccine-doses-administered?tab=chart&stackMode=absolute&time=latest&country=Alaska~Arizona~California~Connecticut~Florida~GEO~Hawaii~Illinois~Indiana~Maine~Maryland~Massachusetts~Michigan~Missouri~New%20Jersey~New%20Mexico~New%20York%20State~North%20Carolina~North%20Dakota~Ohio~Oklahoma~Pennsylvania~South%20Dakota~Tennessee~Texas~Vermont~Virginia~Washington~West%20Virginia~Wisconsin&region=World' className={styles.Iframe}></iframe>
            </div>
    );
};

export default Iframe;