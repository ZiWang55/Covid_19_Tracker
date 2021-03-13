import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  
  const [user, setUser] = useState('testName');
  const [password, setPassword] = useState('testPassword');

  const showUser = () => {
    console.log("THE USER IS ", user);
  };
  
  const changeUser = () => {
    console.log("THE NEW USER IS ", user);
    console.log("THE NEW PASSWORD IS ", password);
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
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;