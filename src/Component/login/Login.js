import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import iosLockedOutline from '@iconify-icons/ion/ios-locked-outline';
import "./style.css";
import Header from "../Header";
import Footer from "../Footer";

const Login = (props) => {
    return (
        <>
            <Header />
            <div class="login-dark">
                <form method="post">
                    <h2 class="sr-only">Login Form</h2>
                    <div class="illustration"><Icon icon={iosLockedOutline} /></div>
                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Log In</button></div><a href="#" class="forgot">Forgot your email or password?</a></form>
            </div>
            <Footer />
        </>
    )
}
export default Login;