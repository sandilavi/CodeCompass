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

    getMonday() {
        return axios.get("http://localhost:8080/task/monday/123");
        return axios.get("http://localhost:8080/task/monday/123");
    }

    getTuesday() {
        return axios.get("http://localhost:8080/task/tuesday/123");
        return axios.get("http://localhost:8080/task/tuesday/123");
    }

    getWednesday() {
        return axios.get("http://localhost:8080/task/wednesday/123");
        return axios.get("http://localhost:8080/task/wednesday/123");
    }

    getThursday() {
        return axios.get("http://localhost:8080/task/thursday/123");

    }

    userUpdate() {
        return axios.get("http://localhost:8080/user/userUpdate_email/akilajayawickrama7@gmail.com");
    }
}

export default new UserService()