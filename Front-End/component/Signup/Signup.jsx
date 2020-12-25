import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import classes from './Signup.css';
import RegisterImage from '../../../assets/images/Register.png'
import { register } from '../../controller/axios';

class Signup extends Component {

    state = {

        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',

    }

    clearFields = (e) => {
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
        e.target.confirmPassword.value = '';
        e.target.photo.value = '';
    }
    registerHandler = (event) => {
        event.preventDefault();

        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirmPassword.value,
            photo: event.target.photo.value
        }
        register(user).then(res => {
            this.props.history.push('/login');
        })
    }
    render() {
        return (
            <div className={classes.container}>
                <form onSubmit={(event) => this.registerHandler(event)} onReset={(e) => this.clearFields(e)}>
                    <div className={classes.textField}>
                        <img srcSet={RegisterImage} className={classes.img}></img>
                    </div>

                    <div className={classes.textField}>
                        <TextField
                            name="name" type="text"
                            label="Name" variant="outlined"
                            size="small" fullWidth
                            required
                        />
                    </div>

                    <div className={classes.textField}>

                        <TextField name="email" type="email"
                            label="Email" variant="outlined"
                            size="small" fullWidth
                            required />
                        <div />

                        <div className={classes.textField}>
                            <TextField
                                name="password" type="password"
                                label="Password" variant="outlined"
                                size="small" fullWidth
                                required />

                        </div>

                        <div className={classes.textField}>
                            <TextField name="confirmPassword" type="password"
                                label="Confirm Password" variant="outlined"
                                size="small" fullWidth
                                error={this.state.error}
                                required />
                        </div>

                        <div className={classes.textField}>
                            <TextField name="photo" type="file"
                            size="small" fullWidth
                                accept="image/*" variant="outlined"
                            />
                        </div>

                        <div className={classes.button}>
                            <button type="reset">Clear</button>
                            <button type="submit">Register</button>
                        </div>

                    </div>
                </form>
            </div>

        )
    }
}

export default Signup;