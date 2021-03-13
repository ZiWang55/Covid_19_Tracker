import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import API from '../api/Users';

function NewUser() {
    const [NewUser, setNewUser] = useState({});

    function handleFormSubmit(event) {
        event.preventDefault();
          API.saveUser({
            name: NewUser.name,
            email: NewUser.email,
            password: NewUser.password,
            county: NewUser.county
          })
            .then(res => console.log("great job!"))
            .catch(err => console.log(err));   
      };

      function handleInputChange(event) {
        const { name, value } = event.target;
        setNewUser({...NewUser, [name]: value})
      };


    return(
        <Wrapper>
            <form className="form-control">
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleInputChange} />
                </label>
                <br></br>
                <label>
                    Email:
                <input type="text" name="email" onChange={handleInputChange} />
                </label>
                <br></br>
                <label>
                    Password:
                <input type="text" name="password" onChange={handleInputChange} />
                </label>
                <br></br>
                <label>
                    County:
                <input type="text" name="county" onChange={handleInputChange} />
                </label>
                <br></br>
            </form>
            <button onClick={handleFormSubmit}>Create User</button>
        </Wrapper>
    );
}

export default NewUser;