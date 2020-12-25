import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import classes from './profile.css';

class profile extends Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.column}>
                    <img className={classes.round_circle} src="/images/login.png" alt="profile-image"></img>
                </div>
                <div>

                    <TextField className={classes.textfield}
                        label="Name" 
                        variant="standard" disabled />

                    <TextField className={classes.textfield}
                        label="Email"
                        variant="standard" disabled />

                    <TextField
                        label="mobile number" fullWidth
                        variant="standard" disabled />

                    <TextField label="Date of birth " fullWidth
                        variant="standard" disabled />

                    <TextField
                        label="Role" fullWidth variant="standard" disabled />
                    <div>
                        <button>Edit</button>
                        <button>Delete my Account</button>
                    </div>
                </div>
               

            </div>
        )
    }
}

export default profile;

// <div className={classes.left_side}>
// <img className={classes.round_circle} src="/images/login.png" alt="profile-image"></img>
//         <TextField
//             label="Name" fullWidth
//             variant="standard" disabled />

//         <TextField
//             label="Email" fullWidth
//             variant="standard" disabled />


// </div>
// <div className={classes.right_side}>
//     <TextField
//         label="mobile number" fullWidth
//         variant="standard" disabled />

//     <TextField label="Date of birth " fullWidth
//         variant="standard" disabled />

//     <TextField
//         label="Role" fullWidth variant="standard" disabled />
// </div>
