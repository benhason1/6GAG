import Config from '../../Configuration';
import axios from 'axios'


export function login(data) {
    return axios.post(`${Config.serverUsersRoute}/users/login`, { name: data.name, password: data.password })
        .then(response => {
            localStorage.setItem('x-access-token', response.data.token);
            localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
            return response.data
        })
        .catch(err => Promise.reject('Authentication Failed!'));
}

export function isAuthenticated() {
    return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
}