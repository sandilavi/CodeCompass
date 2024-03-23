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

    getMonday(userId) {
        return axios.get(`http://localhost:8080/task/monday/${userId}`);
    }

    getTuesday(userId) {
        return axios.get(`http://localhost:8080/task/tuesday/${userId}`);
    }

    getWednesday(userId) {
        return axios.get(`http://localhost:8080/task/wednesday/${userId}`);
    }

    getThursday(userId) {
        return axios.get(`http://localhost:8080/task/thursday/${userId}`);

    }

    userUpdate() {
        return axios.get("http://localhost:8080/user/userUpdate_email/akilajayawickrama7@gmail.com");
    }

    removeGoal(index) {
        return axios.delete(`http://localhost:8080/task/delete/${index}`);
    }
    getUserDetails(email) {
        return axios.get(`http://localhost:8080/user/${email}`);
    }
}

export default new UserService()