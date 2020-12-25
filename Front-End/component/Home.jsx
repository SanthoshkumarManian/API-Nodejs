import React, { Component } from 'react';
import Main from './Main/main';
import Login from './Login/Login';
import { Switch, Route } from 'react-router-dom';
import Aux from '../hoc/Auxilary';
import Signup from './Signup/Signup';
import Tours from './Tours/Tours';
import forgotPassword from './ForgotPassword/ForgotPassword';
import profile from './Profile/profile';

class Home extends Component {

    render() {
        return (
            <Aux>
                <Switch>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/tours" component={Tours}></Route>
                    <Route path="/profile" component={profile}></Route>
                    <Route path="/forgotpassword" component={forgotPassword}></Route>
                </Switch>
            </Aux>
        );
    }
}

export default Home;