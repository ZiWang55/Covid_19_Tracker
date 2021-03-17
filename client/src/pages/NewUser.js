import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import API from "../api/Users";
import { TextField, Button, Typography, ButtonGroup, Container, Grid } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import GroupIcon from "@material-ui/icons/Group";


function NewUser() {
  const [NewUser, setNewUser] = useState({});

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveUser({
      name: NewUser.name,
      email: NewUser.email,
      password: NewUser.password,
      county: NewUser.county,
    })
      .then((res) => {
        console.log("OUR RES IS ", res);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUser({ ...NewUser, [name]: value });
  }

  function showUsers(event) {
    event.preventDefault();
    API.getUsers()
      .then((res) => {
        console.log("OUR USERS ARE ", res);
      })
      .catch((err) => console.log(err));
  }

  return (
      <Container>
          <Grid container direction="column"
            justify="center"
            alignItems="center" >
              <Grid item style={{margin: '30px'}}>
   
      <form className="form-control">
        <label>
          <Typography> Name:</Typography>
          <TextField
            variant="outlined"
            color="primary"
            type="text"
            name="name"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </label>
        <br></br>
      </form></Grid>
      <Grid item style={{margin:'30px'}}>
      <ButtonGroup>
      <Button
        startIcon={<SaveIcon />}
        variant="contained"
        color="primary"
        onClick={handleFormSubmit}
      >
        Create User
      </Button>
      <br></br>
      <Button
        startIcon={<GroupIcon />}
        variant="contained"
        color="secondary"
        onClick={showUsers}
      >
        Show Users
      </Button>
      </ButtonGroup></Grid>
    </Grid>
    </Container>
  );
}

export default NewUser;
