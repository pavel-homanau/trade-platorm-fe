import {instance} from "../instance";
import {AuthApiType} from "./auth-api.types";

class AuthApiService implements AuthApiType {

    constructor() {
        this.login = this.login.bind(this)
        this.registration = this.registration.bind(this)
    }

    public login(email: string, password: string): Promise<any> {
        return instance.post(`/auth/auth/login/`,
            {email, password})
            .then(response => response.data)
    }

    public registration(email: string, userName: string, password: string): Promise<any> {
        return instance.post(`/auth/auth/registration/`,
            {email, username: userName, password})
            .then(response => response.data)
    }
}

export default AuthApiService;