import { createContext } from "react";

const UserContext = createContext({
    name: "",
    password: ""
});

export default UserContext;