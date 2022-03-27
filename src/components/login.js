import React from 'react';
import {checkAuth} from '../userAuthMocks';


class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            isInvalid: true,
        }

    }


    onSubmit = (e) =>{
        e.preventDefault();
        if(checkAuth(this.state.userName, this.state.password)){ 
            this.props.history.push('/Home');
        }
        this.setState({isInvalid: false})
    }

    getUserName = (e) => {
        e.preventDefault();
        this.setState({
            userName: e.target.value
        });
    }

    getPassWord = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    }

    render(){
        const {isInvalid} = this.state;
        return(
            <div>
                 <h2>Please only admins should be logging in</h2>
                 {!isInvalid && 
                 
                 <div class="alert alert-danger" role="alert">
                 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                 <span class="sr-only">Error:</span>
                    Bad Login
               </div>
                 }
                 <form>
                    <div class="form-group">
                         <label>Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.userName} onChange={e=>this.getUserName(e)}/>
                    </div>
                     <div class="form-group">
                        <label>Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={e=>this.getPassWord(e)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)}>Login</button>
                </form>
            </div>
        )
    }

}

export default LoginPage