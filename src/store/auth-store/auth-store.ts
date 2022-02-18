import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {AuthApiService, AuthApiType} from "../../api/auth-api";
import {setUserToken, getUserToken} from "../../utility/session-storage";

class AuthStore {
    token: string;
    authApi: AuthApiType;

    constructor() {
        makeObservable(this, {
            token: observable,
            authorization: computed,
            login: action,
            removeToken: action,
            registration: action,
        })
        this.token = '';
        this.authApi = new AuthApiService();
        this.login = this.login.bind(this)
        this.removeToken = this.removeToken.bind(this)
        this.registration = this.registration.bind(this)
    }

    get authorization() {
        if (!this.token) {
            const token = getUserToken()
            if (token) return this.token = token
        } else {
            return this.token
        }
    }

    removeToken(){
        this.token = ''
    }

    login(email: string, password: string) {
        this.authApi.login(email, password)
            .then(({token}) => {
                runInAction(() => {
                    setUserToken(token);
                    this.token = token
                })
            })
            .catch((error) => console.log(error))
    }

    registration(email: string, userName: string, password: string) {
        this.authApi.registration(email, userName, password)
            .then(() => {runInAction(() => {})})
            .catch((error) => console.log(error))
    }
}

export default new AuthStore();