import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user/";
const HOST_bASE_URL = 'http://localhost:8080/';

class UserService {

    signing(user) {
        return axios.post(USER_API_BASE_URL + "login", user);
    }

    signup(user) {
        return axios.post(USER_API_BASE_URL + "signUp", user);
    }

    goalSave(data) {
        return axios.post(HOST_bASE_URL + "task/save", data);
    }

    getMonday(userId) {
        return axios.get(HOST_bASE_URL + `task/monday/${userId}`);
    }

    getTuesday(userId) {
        return axios.get(HOST_bASE_URL + `task/tuesday/${userId}`);
    }

    getWednesday(userId) {
        return axios.get(HOST_bASE_URL + `task/wednesday/${userId}`);
    }

    getThursday(userId) {
        return axios.get(HOST_bASE_URL + `task/thursday/${userId}`);

    }

    userUpdate(email) {
        return axios.get(HOST_bASE_URL + `user/userUpdate_email/akilajayawickrama7@gmail.com`);
    }

    removeGoal(index) {
        return axios.delete(HOST_bASE_URL + `task/delete/${index}`);
    }
    getUserDetails(email) {
        return axios.get(HOST_bASE_URL + `user/${email}`);
    }

    getLearningPlanDetails(level, language) {
        return axios.get(HOST_bASE_URL + `resourses/${language}/${level}`)
    }
    getVideo(level, language) {
        return axios.get(HOST_bASE_URL + `vedio/${language}/${level}`)
    }
}

export default new UserService()