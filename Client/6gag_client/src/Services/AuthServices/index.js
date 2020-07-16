import Config from '../../Configuration';
import axios from 'axios'


export function login(data) {
    return axios.post(`${Config.serverUsersRoute}/login`, { username: data.username, password: data.password })
        .then(response => {
            localStorage.setItem(Config.accessTokenName, response.data.token);
            localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
            return response.data
        })
        .catch(err => Promise.reject('Authentication Failed!'));
}

export function isAuthenticated() {
    return localStorage.getItem(Config.accessTokenName) && localStorage.getItem('x-access-token-expiration') > Date.now()
}


export function signUp(data) {
    return axios.post(`${Config.serverUsersRoute}`, { username: data.username, password: data.password })
        .then(response => {
            localStorage.setItem(Config.accessTokenName, response.data.token);
            localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
            return response.data
        })
        .catch(err => Promise.reject(err.response.data.message));
}