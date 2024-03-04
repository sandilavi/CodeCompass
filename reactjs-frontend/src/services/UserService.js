import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user/login";

class UserService {

    signing(employee) {
        return axios.post(USER_API_BASE_URL, employee);
    }
}

export default new UserService()