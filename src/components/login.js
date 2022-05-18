import React from 'react';
import {checkAuth} from '../userAuthMocks';
import AddUser from './addUser';

class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userName: '',
            password: '',
            isInvalid: true,
            error: '',
            addNewUser: false,
            loading: false,
        }

    }


    onSubmit = (e) =>{
        e.preventDefault();

        if(this.state.userName ==''){
            this.setState({error: 'User name cannot be empty', isInvalid: false});}
   
        else if(this.state.password==''){
               this.setState({error: 'Password cannot be empty', isInvalid: false});
        }   

        else{
        this.setState({loading: true});
        Promise.resolve(checkAuth(this.state.userName, this.state.password)).then((authenticated)=>{
                console.log("Authenticated", authenticated);
                this.props.history.push('/Home');
                this.setState({loading: false});
        })
    }
          
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

    addNewUser = (e) => {
        e.preventDefault();
        this.setState({addNewUser: true})
    }

    render(){
        const {isInvalid, error, addNewUser, loading} = this.state;
        return(
            <div>
                 <h3>Bulandpuri Sahib Barsi Saraava System</h3>
                 <button className="btn btn-primary" onClick={e=>this.addNewUser(e)}>Add New User</button>
                 {addNewUser && <AddUser/>}
                 {!isInvalid && 
                 <div class="alert alert-danger" role="alert">
                 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                 <span class="sr-only">Error: </span>
                    {error !=''? error: 'Bad Login'}
               </div>
                }
               {loading && 
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                } 
                 <form style={{width: '57vh'}}>
                    <div class="form-group">
                         <label>Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.userName} onChange={e=>this.getUserName(e)}/>
                    </div>
                     <div class="form-group">
                        <label>Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={e=>this.getPassWord(e)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" style={{marginTop: '10px'} }onClick={e => this.onSubmit(e)}>Login</button>
                </form>
                {/* <img src={"./DarbarMain.jpeg"} width="500" height="500"/> */}
            </div>
        )
    }

}

export default LoginPage