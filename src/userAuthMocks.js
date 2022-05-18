import { BehaviorSubject } from 'rxjs';
import {HerokuURL} from './constants';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


export const checkAuth = async (username, password) => {
    let isAuthenticated = false; 
    let token = '';

    token = await fetchToken(username, password);

    Promise.resolve(token).then((success) => {
        console.log(success.accessToken);
        success.accessToken==undefined ? isAuthenticated = false: isAuthenticated= true;
        if(isAuthenticated){
                localStorage.setItem('currentUser', JSON.stringify(username));
                localStorage.setItem('accessToken', success.accessToken);
                currentUserSubject.next(username);
            
        }
        return isAuthenticated;
    });
}

let fetchToken = async (username, password) => {
    const bodyReq = {username: username, password: password};
    let response = await fetch(`${HerokuURL}api/auth/signin`, {method: 'POST',  headers: {'Content-Type' : "application/json"}, body:JSON.stringify(bodyReq)}).then(res=>res.json());
    return response;
  };


export const authenticationService = {
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {return currentUserSubject.value}
};

function logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    currentUserSubject.next(null);
}