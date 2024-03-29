import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../userAuthMocks';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        console.log("Current User", currentUser)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }

        // check if route is restricted by role
       
        // authorised so return component
        const addCurrentUser = {...props, currentUser}
        
        return <Component {...addCurrentUser} />
    }} />

)

export default PrivateRoute;