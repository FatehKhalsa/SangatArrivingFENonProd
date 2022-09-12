import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../userAuthMocks';

const ModeratorRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        console.log("Current User", currentUser, authenticationService);

        const Role = localStorage.getItem('UserRole');
        
        if (!currentUser && Role==='user') {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }

        // check if route is restricted by role
       
        // authorised so return component
        return <Component {...props} />
    }} />

)

export default ModeratorRoute;