import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user";

class userService {

    loginUser(){
        return axios.get(USER_API_BASE_URL,login);
    }

    signUpUser(userDto){
        return axios.post(USER_API_BASE_URL,signUp);
    }

   
}

export default new userService()