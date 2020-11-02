import React from 'react';
import classes from './main.css';
import Toolbar from '../Toolbar/toolbar';


const content=()=>{

    return(
        <div  className={classes.main}>
            <Toolbar/>
        </div>
    )
}

export default content;