import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField, Container, Grid, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import API from '../api/Users';

function Settings() {
  const [userSettings, setUserSettings] = useState({
    name: '',
    email: '',
    password: '',
    county: '',
    optInEmail: true
  });

  const handleNameChange = (event) => {
    setUserSettings({ ...userSettings, [event.target.name]: event.target.value });
  };

  const handleEmailChange = (event) => {
    setUserSettings({ ...userSettings, [event.target.name]: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUserSettings({ ...userSettings, [event.target.name]: event.target.value });
    // console.log(userSettings);
  };

  const handleCountyChange = (event) => {
    setUserSettings({ ...userSettings, [event.target.name]: event.target.value });
    // console.log(userSettings);
  };

  const handleOptInChange = (event) => {
    setUserSettings({ ...userSettings, [event.target.name]: event.target.checked });
    // console.log(userSettings);
  };

  const saveButton = () => {
    //create functionality to save state to database
    console.log('save clicked. userSettings:', userSettings);
  };

  console.log(userSettings);

  return (
    <Container>
      <Grid container direction='column' justify='center' alignItems='center' style={{ marginTop: '30px' }}>
        <FormGroup column>
          <Grid item style={{ margin: '5px' }}>
            <FormControlLabel
              control={<TextField id='standard-basic' label='Change name' onChange={handleNameChange} name='name' variant='outlined' type='text' />}
              label='Change name'
            />
          </Grid>

          <Grid item style={{ margin: '5px' }}>
            <FormControlLabel
              control={
                <TextField id='standard-basic' label='Change email' onChange={handleEmailChange} name='email' variant='outlined' type='text' />
              }
              label='Change email'
            />
          </Grid>

          <Grid item style={{ margin: '5px' }}>
            <FormControlLabel
              control={
                <TextField
                  id='standard-basic'
                  label='Change password'
                  onChange={handlePasswordChange}
                  name='password'
                  variant='outlined'
                  type='password'
                />
              }
              label='Change password'
            />
          </Grid>

          <Grid item style={{ margin: '5px' }}>
            <FormControlLabel
              control={
                <TextField id='standard-basic' label='Change county' onChange={handleCountyChange} name='county' variant='outlined' type='text' />
              }
              label='Change county'
            />
          </Grid>

          <Grid item style={{ margin: '5px' }}>
            <FormControlLabel
              control={<Checkbox checked={userSettings.optInEmail} onChange={handleOptInChange} name='optInEmail' color='primary' />}
              label='Opt-in to emails'
            />
          </Grid>

          <Grid item style={{ margin: '5px' }}>
            <Button variant='contained' color='primary' size='large' onClick={saveButton} startIcon={<SaveIcon />}>
              Save
            </Button>
          </Grid>
        </FormGroup>
      </Grid>
    </Container>
  );
}

export default Settings;
