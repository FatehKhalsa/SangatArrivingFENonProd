import React from 'react';
import {checkAuth, userRole} from '../userAuthMocks';
import AddUser from './addUser';
import Loader from '../helper/loader';
import UserTravelInfoLookUp from '../components/modals/userTravelInfoLookUp';

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
            travelInfo: false,
        }

    }


    onSubmit = (e) =>{
        e.preventDefault();

        if(this.state.userName ===''){
            this.setState({error: 'User name cannot be empty', isInvalid: false});}
   
        else if(this.state.password===''){
               this.setState({error: 'Password cannot be empty', isInvalid: false});
        }   

        else{
        this.setState({loading: true});
        Promise.resolve(checkAuth(this.state.userName, this.state.password)).then((authenticated)=>{
                if(authenticated===false){
                    this.setState({error: "Invalid username or password", isInvalid: false, loading: false});
                    return;
                }
                const role = userRole();
                this.props.history.push({
                   pathname: '/Saravas',
                   state: role,
                });
                this.setState({loading: false});
        })
        console.log('userRole',userRole());
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

    openTravelInfo = (e) => {
        e.preventDefault();
       this.setState({travelInfo: true})
    }

    render(){
        const {isInvalid, error, travelInfo, loading} = this.state;
        return(
            <div>
                 <h3>Sangat Arriving System</h3>
                 <button className="btn btn-primary" onClick={e=>this.openTravelInfo(e)}>Look up your travel info</button>
                 {travelInfo && <UserTravelInfoLookUp/>}
                 <div style={{
                     border: '1px solid blue',
                     width: '370px',
                     marginTop: '10px',
                     padding: '5px',
                     backgroundColor: '#0d6efd',
                     borderRadius: '5px'
                 }}>
                 <a style={{color: 'white', textDecoration: 'none'}} href="mailto:sangatflights@gmail.com?Subject=Flight%20Information%20for%20%3CYOUR%20NAME%3E&Body=Ji%2C%20%0A%0AAttached%20is%20the%20flight%20for%20________.%0A%0AI%20am%20from%20%28CITY%20HERE%29%2C%20%28COUNTRY%20HERE%29.%0A%0AMy%20month%20and%20year%20of%20birth%20is%20___________.%0A%0AMy%20phone%20number%20for%20WhatsApp%20contact%20is%20________________.%0A%0APlease%20input%20my%20flight%20information%20into%20the%20flight%20system%20for%20Gurpurab%202022.%0A%0AThanks">Send Email regarding your Flight Info to Sewadar</a>
                 </div>
                 {!isInvalid && 
                 <div class="alert alert-danger" role="alert">
                 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                 <span class="sr-only">Error: </span>
                    {error !==''? error: 'Bad Login'}
               </div>
                }
               {loading && 
                    <Loader/>
                } 
                 <form style={{width: '50vh'}}>
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