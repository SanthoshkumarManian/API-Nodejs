import Home from '../Front-End/component/Home';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

const home=(
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
)

ReactDOM.render(home,document.getElementById('root'));