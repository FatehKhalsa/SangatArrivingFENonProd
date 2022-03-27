import { BehaviorSubject } from 'rxjs';


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


export const checkAuth = (username, password) => {
    let isAuthenticated = false; 

    Object.keys(userAuths).map(key=>{
            if(key==username && password ==userAuths[username]){
                isAuthenticated = true; 
            }
           
    })

    if(isAuthenticated) {
        localStorage.setItem('currentUser', JSON.stringify(username));
        currentUserSubject.next(username);
    }

    return isAuthenticated;
}


const userAuths = {
    "manjodh@gmail.com": "Waheguru13",
    "Aman@gmail.com": "BC13"
}


export const authenticationService = {
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {return currentUserSubject.value}
};

function logout(){
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}