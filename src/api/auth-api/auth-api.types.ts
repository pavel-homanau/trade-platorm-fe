export interface AuthApiType {
    login: (email: string, password: string) => Promise<any>;
    registration: (email: string, userName: string, password: string) => Promise<any>;
}