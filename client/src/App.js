import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NewUser from './pages/NewUser'
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import API from './api/Users';


function App() {
  
  const [user, setUser] = useState('testName');
  const [password, setPassword] = useState('testPassword');

  const showUser = () => {
    console.log("THE USER IS ", user);
  };
  
  const changeUser = event => {
    event.preventDefault();
   
   
    console.log("AUTHENTICATION EMAIL ", event.target.parentNode.nameInput.value)
    console.log("AUTHENTICATION PASSWORD ", event.target.parentNode.passwordInput.value)
    let email = event.target.parentNode.nameInput.value
    let password = event.target.parentNode.passwordInput.value
    
    // console.log("THE NEW USER IS ", user);
    // console.log("THE NEW PASSWORD IS ", password);

    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(response) {
        /* window.location.replace("/members"); */
        // If there's an error, log the error
        console.log('post route worked, this is the .then!', response);
      })
      .catch(function(err) {
        console.log(err);
      });

    // API.checkUser({
    //   email: email,
    //   password: password
    // })
    // .then(res => {
    //   console.log("AUTHENTICATION ROUTE ", res);
    // })
    // .catch(err => {
    //   console.log("POST ROUTE ERROR ", err);
    // });
  };
  
  const handleInputName = event => {
    event.preventDefault();
    console.log("YOUR NAME IS ", event.target.value);
    setUser(event.target.value);
  };
  
  const handleInputPassword = event => {
    event.preventDefault();
    console.log("YOUR SUPER SECRET PASSWORD IS ", event.target.value);
    setPassword(event.target.value);
  };

    return (
        <Router>
            <div>
            <Navbar changeUser={changeUser} handleInputName={handleInputName} handleInputPassword={handleInputPassword} />
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/newuser" component={NewUser} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;