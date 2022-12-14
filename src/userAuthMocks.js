import { BehaviorSubject } from 'rxjs';
import {HerokuURL} from './constants';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

let role ='';


export const checkAuth = async (username, password) => {
    let isAuthenticated = false; 
    let token = '';

    token = await fetchToken(username, password);

    if(token.message && token.message==='User Not found.'){
        isAuthenticated = false;
        return isAuthenticated;
    }

    Promise.resolve(token).then((success) => {
        success.accessToken===undefined ? isAuthenticated = false: isAuthenticated= true;
        const userRole = success.roles.length>0? success.roles[0]: '';
        role = userRole;
        if(isAuthenticated){
                localStorage.setItem('currentUser', JSON.stringify(username));
                localStorage.setItem('accessToken', success.accessToken);
                localStorage.setItem('userRole', userRole);
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

export const userRole = () =>{
    return role;
}


export const authenticationService = {
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {return currentUserSubject.value}
};

function logout(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    currentUserSubject.next(null);
}