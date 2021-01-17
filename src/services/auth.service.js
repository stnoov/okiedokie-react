import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (email, first_name, last_name, age, password) => {
    return axios.post(API_URL + "signup", {
        email,
        first_name,
        last_name,
        age,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "signin", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};