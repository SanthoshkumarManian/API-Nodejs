import React, { Component } from 'react';
import classes from './Tours.css';

class Tours extends Component{

    render(){
        return(
            <div className={classes.container}> 
                <ul className={classes.card}>  
                        Tamil nadu
                </ul>
                <ul className={classes.card}>  
                   kerala
                </ul>
                <ul className={classes.card}>  
                        Tamil nadu
                </ul>
                <ul className={classes.card}>  
                   kerala
                </ul>
                <ul className={classes.card}>  
                        Tamil nadu
                </ul>
                <ul className={classes.card}>  
                   kerala
                </ul>
            </div>
        )
    }
}

export default Tours;