import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from '../Register';

import splash from "./Splash.svg";
import welcome from "./welcome.png";
import info from "./info.png";
import privacy from "./privacy.png";


export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div className="wrap">
            <img className="splash" src={splash} />
                <img className="welcome" src={welcome} />
                <img className="info" src={info} />
                <img className="privacy" src={privacy} />
            <div className="register">
                <Register />
            </div>
            {/* <Link to="/login">
                    {showLoginBtn()}
                </Link> */}
        </div>
    )
};

export default Home;
