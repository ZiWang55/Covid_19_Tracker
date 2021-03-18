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
    },
    updateUser: function(id, userData) {
        return axios.put("/api/users/" + id, userData);
    },
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    }
};