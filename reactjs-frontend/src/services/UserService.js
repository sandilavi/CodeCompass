import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user/";

class UserService {

    signing(employee) {
        return axios.post(USER_API_BASE_URL + "login", employee);
    }

    signup(user) {
        return axios.post(USER_API_BASE_URL + "signUp", user);
    }
}

export default new UserService()