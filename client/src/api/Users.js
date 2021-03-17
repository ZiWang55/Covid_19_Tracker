import axios from "axios";

export default {
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    getUsers: function() {
        return axios.get("/api/users");
    },
    checkUser: function(userData) {
        return axios.post("/api/login", userData);
    }
};