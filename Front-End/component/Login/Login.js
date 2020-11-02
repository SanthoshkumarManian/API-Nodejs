import React, { Component } from 'react'
import classes from './login.css';
import TextField from '@material-ui/core/TextField';
import image from '../../../assets/images/login.png'
import { NavLink } from 'react-router-dom';
import {login} from '../../controller/axios';

class Login extends Component{

    signin=(event)=>{
        event.preventDefault();
        const data={
            email:event.target.username.value,
            password:event.target.password.value
        }
        login(data).then(res=>{

            this.props.history.push('/tours');
            
        })
        
    }
    render(){
            return(
                <div className={classes.container}>
                    <img 
                    src={image} 
                    alt="login background image"
                    width="700" height="400"></img>
                    <form className={classes.form} onSubmit={(event)=>this.signin(event)}>
                        <div className={classes.input}>
                            <TextField 
                            name="username" type="email" 
                            label="Username" variant="outlined"
                            />
                            <br/>
                            <TextField name="password" type="password" 
                            label="Password" variant="outlined"
                           />
                            <NavLink to="/forgotpassword" className={classes.forgot} >Forgot your Password?</NavLink>
                           <button 
                            type="submit" >Login</button>

                           <NavLink to="/signup" className={classes.link} >Don't have account?Signup</NavLink>
                        </div>
                    </form>
                </div>
            );
    }
}
        

export default Login;