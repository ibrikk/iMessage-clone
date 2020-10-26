import React from 'react';
import './Login.styles.css';
import { Button } from '@material-ui/core';
import logo from './assets/IMessage_logo_(Apple_Inc.).png';
import { auth, provider } from './firebase.utils';


const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((err) => alert(err.message));
    };
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src={logo} alt='' />
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}> Sign In </Button>
        </div>
    );
}

export default Login;
