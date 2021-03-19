import React, { useState, useContext } from 'react';
import { FormGroup, FormControlLabel, Checkbox, TextField, Container, Grid, Button, Typography, ButtonGroup } from '@material-ui/core';
import UserContext from '../api/UserContext';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import API from '../api/Users';
import { useEffect } from 'react';

function Settings() {
  const [userSettings, setUserSettings] = useState({
    name: '',
    email: '',
    password: '',
    county: '',
    optInEmail: true,
    userID: 0,
    isAuthenticated: false
  });

  let user = useContext(UserContext);
  
  const onLoad = () => {
    setUserSettings(user);
  }

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
    API.updateUser(user.userID,{
      name: userSettings.name,
      email: userSettings.email,
      password: userSettings.password,
      county: userSettings.county,
      opt_in: userSettings.optInEmail
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  const deleteButton = () => {
    API.deleteUser(user.userID)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    onLoad();
  },[]);


  return (
    <Container>
      <Grid container direction='column' justify='center' alignItems='center' style={{ marginTop: '5px' }}>
        <Grid item style={{ margin: "30px" }}>
          <form className="form-control">
            <label>
              <Typography> Name:</Typography>
              <TextField
                variant="outlined"
                color="primary"
                type="text"
                name="name"
                onChange={handleNameChange}
              />
            </label>
            <br></br>
            <label>
              <Typography> Email:</Typography>
              <TextField
                variant="outlined"
                color="primary"
                type="email"
                name="email"
                onChange={handleEmailChange}
              />
            </label>
            <br></br>
            <label>
              <Typography> Password:</Typography>
              <TextField
                variant="outlined"
                color="primary"
                type="password"
                name="password"
                onChange={handlePasswordChange}
              />
            </label>
            <br></br>
            <label>
              <Typography> County:</Typography>
              <TextField
                variant="outlined"
                color="primary"
                type="text"
                name="county"
                onChange={handleCountyChange}
              />
            </label>
            <br></br>
            <FormControlLabel
              control={<Checkbox checked={userSettings.optInEmail} onChange={handleOptInChange} name='optInEmail' color='primary' />}
              label='Opt-in to emails'
            />
          </form>
        </Grid>
          <Grid item style={{ margin: "20px" }}>
          <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="primary"
              onClick={saveButton}
            >
              Save
            </Button>
            <br></br>
            <Button
              startIcon={<DeleteIcon />}
              variant="contained"
              color="secondary"
              onClick={deleteButton}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings;
