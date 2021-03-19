import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { fetchCountries } from '../../api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  const classes = useStyles();
  // console.log(fetchedCountries);

  return (
    <FormControl variant='filled' style={{width:'150px'}} className={classes.root}>
      <InputLabel shrink htmlFor="age-native-label-placeholder">Country</InputLabel>
      <Select defaultValue='' displayEmpty onChange={(e) => handleCountryChange(e.target.value)}>
        <MenuItem value="">Global</MenuItem>
        {fetchedCountries.map((country, i) => (
          <MenuItem value={country} key={i}>
            {country}
          </MenuItem>
        ))}   
      </Select>
   
    </FormControl>
  );
};
export default CountryPicker;
