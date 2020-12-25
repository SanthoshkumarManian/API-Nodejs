import React from 'react';
import { TextField } from '@material-ui/core';
import classes from './Forgotpassword.css';


const forgotpassword = () => {

    return (
        <div className={classes.container}>
            <span className={classes.left}>

            </span>
            <span className={classes.right}>
                <form className={classes.form}>
                    <TextField
                        name=" username" type="email"
                        label="Email" variant="outlined"
                    />
                    <button className={classes.button}>Reset</button>
                </form>
            </span>
        </div>

    );
}

export default forgotpassword;