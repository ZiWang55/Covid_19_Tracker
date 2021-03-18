import { createContext } from "react";

const UserContext = createContext({
    name: "",
    email: "",
    password: "",
    county: "",
    opt_in: "",
    userID: 0,
    isAuthenticated: false
});

export default UserContext;