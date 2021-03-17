import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Settings from './pages/Settings';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import API from './api/Users';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [county, setCounty] = useState('');
  const [opt_in, setOpt_in] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  // const showUser = () => {
  //   console.log("THE USER IS ", user);
  // };

  const changeUser = event => {
    event.preventDefault(); 
    console.log("AUTHENTICATION EMAIL ", email)
    console.log("AUTHENTICATION PASSWORD ", password)

    $.post('/api/login', {
      email: email,
      password: password
    })
      .then(function (response) {
        /* window.location.replace("/members"); */
        // If there's an error, log the error
        console.log('post route worked, this is the .then!', response);
        setAuthenticated(true);
        setName(response[0].name);
        setEmail(response[0].email);
        setPassword(response[0].password);
        setCounty(response[0].county);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleInputName = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const testFunction = event => {
    console.log("YOU ARE AUTHENTICATED");
  };

  useEffect (() => {
    console.log("AUTHENTICATION IS ", authenticated);
  }, [authenticated]);

    return (
      <UserContext.Provider value={{ name, email, password, county, authenticated }}>
        <Router>
            <div>
            { authenticated === false ? <Navbar changeUser={changeUser} handleInputName={handleInputName} handleInputPassword={handleInputPassword} authentication="false" /> : <Navbar authentication="true" changeUser={testFunction} /> }
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/newuser" component={NewUser} />
                </Wrapper>
            </div>
        </Router>
      </UserContext.Provider>
    );
}

export default App;
