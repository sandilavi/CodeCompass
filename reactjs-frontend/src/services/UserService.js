import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user/";

class UserService {

    signing(user) {
        return axios.post(USER_API_BASE_URL + "login", user);
    }

    signup(user) {
        return axios.post(USER_API_BASE_URL + "signUp", user);
    }

    goalSave(data) {
        return axios.post("http://localhost:8080/task/save", data);
    }

    getGoal() {
        return axios.get("http://localhost:8080/task/monday/124");
    }
}

export default new UserService()