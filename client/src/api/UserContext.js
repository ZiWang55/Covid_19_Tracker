import { createContext } from "react";

const UserContext = createContext({
    name: "",
    email: "",
    password: "",
    county: "",
    isAuthenticated: false
});

export default UserContext;