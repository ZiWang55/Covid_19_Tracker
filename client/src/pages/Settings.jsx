import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  FormControlLabel,
  Checkbox,
  TextField,
  Container,
  Grid,
  Button,
  Typography,
  ButtonGroup,
  
} from "@material-ui/core";
import UserContext from "../api/UserContext";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../api/Users";
import { useEffect } from "react";
import Snackbar from '../components/Snackbar/Snackbar'




function Settings() {
 
  
  

  /*   const classes = useStyles(); */

  const [open, setOpen] = useState(false);
  const [userSettings, setUserSettings] = useState({
    name: '',
    email: '',
    password: '',
    county: '',
    optInEmail: true,
    userID: 0,
    isAuthenticated: false,
  });

  let user = useContext(UserContext);

  const handleNameChange = (event) => {
    setUserSettings({
      ...userSettings,
      [event.target.name]: event.target.value,
    });
    console.log('handle', userSettings)
    console.log('name', event.target.name)
    console.log('value', event.target.value)
  };

  const handleFormChange = (event) => {
    setUserSettings({
      ...userSettings,
      [event.target.name]: event.target.value
    })
  }

  const saveButton = () => {
    //create functionality to save state to database
    console.log("save clicked. userSettings:", userSettings);
    console.log("save clicked. user:", user);
    API.updateUser(user.userID, {
      name: userSettings.name,
      email: userSettings.email,
      password: userSettings.password,
      county: userSettings.county,
      opt_in: userSettings.optInEmail,
    })
      .then((res) => {
        console.log('res b4 setopen', res.data)
        setOpen(true);
        document.forms['formToClear'].reset();
        
      })
      .catch((err) => console.log(err));
  };

  const deleteButton = () => {
    API.deleteUser(user.userID)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // onLoad();
    const onLoad = () => {
      setUserSettings(user);
    };
    onLoad();
    console.log("OUR USER CONTEXT IS ", user);
    // console.log("OUR USER SETTINGS AUTHENTICATION IS ", userSettings.isAuthenticated);
  }, []);

  return (
    <>
      {user.authenticated === true ? (
        <Container>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <Grid item style={{ margin: "30px" }}>
              <form className="form-control" id='formToClear'>
                <label>
                  <Typography> Name:</Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="name"
                    placeholder="Change your name"
                    onChange={handleFormChange}
                  />
                </label>
                <br />
                <label>
                  <Typography> Email:</Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    type="email"
                    name="email"
                    placeholder="Change your email"
                    onChange={handleFormChange}
                  />
                </label>
                <br />
                <label>
                  <Typography> Password:</Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    type="password"
                    name="password"
                    placeholder="Change your password"
                    onChange={handleFormChange}
                  />
                </label>
                <br />
                <label>
                  <Typography> County:</Typography>
                  <TextField
                    variant="outlined"
                    color="primary"
                    type="text"
                    name="county"
                    placeholder="Change your county"
                    onChange={handleFormChange}
                  />
                </label>
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={userSettings.optInEmail}
                      onChange={handleFormChange}
                      name="optInEmail"
                      color="primary"
                    />
                  }
                  label="Leave unchecked to opt-out of emails"
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
          <div>
            <Snackbar open={open} setOpen={setOpen}/>

            
          </div>
        </Container>
      ) : (
        <>
          <Redirect to="/page404" />
        </>
      )}
    </>
  );
}

export default Settings;
