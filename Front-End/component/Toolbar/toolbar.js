import React from "react";
import classes from './toolbar.css';
import { NavLink, Switch ,Route } from "react-router-dom";
import Login from '../Login/Login';

const toolbar=()=>{

    return(
        <div> 
            <span className={classes.head}>TOURS & GUIDES </span>
            <nav> 
                <NavLink to="/signup" className={classes.button}>Signup</NavLink>
                <NavLink to="/login" className={classes.button}>Login</NavLink>
            </nav>
            
        </div>
    ) 
}

export default toolbar; 