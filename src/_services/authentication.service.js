import { BehaviorSubject } from 'rxjs';

import axios from 'axios';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    register,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {

    return axios.post('/auth/login',{ username, password })
    .then(res=>{
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        currentUserSubject.next(res.data);
        return res;
    });

}

function register(firstName, lastName, username,email, password, confirmPassword) {
    return axios.post('/auth/register',{ firstName, lastName,username,email,password })
    .then(res=>{
        return res;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
