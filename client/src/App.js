import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Settings from './pages/Settings';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import UserContext from './api/UserContext';
import axios from 'axios';

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [county, setCounty] = useState('');
  const [opt_in, setOpt_in] = useState(false);
  const [userID, setUserID] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);

  const changeUser = event => {
    event.preventDefault(); 

    axios.post('/api/login', {
      email: email,
      password: password
    })
      .then(function (response) {

        // If there's an error, log the error
        console.log('post route worked, this is the .then!', response);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setCounty(response.data[0].county);
        setOpt_in(response.data[0].opt_in);
        setUserID(response.data[0]._id);
        setAuthenticated(true);
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
    console.log("USER NAME IS ", name);
    console.log("USER EMAIL IS ", email);
    console.log("USER PASSWORD IS ", password);
    console.log("USER COUNTY IS ", county);
    console.log("USER OPT-IN IS ", opt_in);
    console.log("USER ID IS ", userID);
  }, [authenticated]);

    return (
      <UserContext.Provider value={{ name, email, password, county, opt_in, userID, authenticated }}>
        <Router>
            <div>
            { authenticated === false ? <Navbar changeUser={changeUser} handleInputName={handleInputName} handleInputPassword={handleInputPassword} authentication="false" /> : <Navbar authentication="true" changeUser={testFunction} /> }
                <Wrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/newuser" component={NewUser} />
                    <Route exact path="/settings" component={Settings} />
                </Wrapper>
            </div>
        </Router>
      </UserContext.Provider>
    );
}

export default App;
