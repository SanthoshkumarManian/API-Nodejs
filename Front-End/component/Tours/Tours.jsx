import React, { Component } from 'react';
import classes from './Tours.css';
import Card from 'react-bootstrap/Card';
import { FormControl, TextField } from '@material-ui/core';

class Tours extends Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.nav}>
                    <div>
                        <form>
                            <input name="search" type="text" hint="Search"></input>
                            <button type="submit" className={classes.button}>submit</button>
                        </form>
                    </div>

                    <div>
                        <select>
                            <option value="Name">Name a - z </option>
                            <option value="Date">Date </option>
                        </select>
                    </div>

                    <div>
                        <button className={classes.button}>+ Create Tour</button>
                    </div>


                    <div>
                        <img src="/images/login.png" alt="profile" className={classes.profile} id="dropdown-basic" />
                    </div>
                </div>

                <div className={classes.content}>
                    <Card className={classes.card}>
                        <Card.Img src="/images/login.png" className={classes.img}></Card.Img>
                        <Card.Body>
                            <Card.Title>Miami</Card.Title>
                            <Card.Text>this image is so cute</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Add review</button>
                        </Card.Footer>
                    </Card>

                    <Card className={classes.card}>
                        <Card.Img src="/images/login.png" className={classes.img}></Card.Img>
                        <Card.Body>
                            <Card.Title>Miami</Card.Title>
                            <Card.Text>this image is so cute</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Add review</button>
                        </Card.Footer>
                    </Card>

                    <Card className={classes.card}>
                        <Card.Img src="/images/login.png" className={classes.img}></Card.Img>
                        <Card.Body>
                            <Card.Title>Miami</Card.Title>
                            <Card.Text>this image is so not cute</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Add review</button>
                        </Card.Footer>
                    </Card>


                    <Card className={classes.card}>
                        <Card.Img src="/images/login.png" className={classes.img}></Card.Img>
                        <Card.Body>
                            <Card.Title>Miami</Card.Title>
                            <Card.Text>this image is so not cute</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button>Add review</button>
                        </Card.Footer>
                    </Card>


                </div>

                <div className={classes.review}>
                    <TextField 
                    label="Name"
                    variant="standard"
                    fullWidth
                    required
                    >

                    </TextField>

                    <FormControl>
                        <label>Write your comment</label>
                        <textarea type="text"  rows="10" cols="50"></textarea>
                    </FormControl>

                    <button style={{alignItems:"center"}}>submit</button>
                </div>

            </div>
        )
    }
}

export default Tours; 