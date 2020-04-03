import React from 'react';
import classes from '../../styles/styles.module.css'
import Typography from "@material-ui/core/Typography";
import GoogleAuth from "../TopBar/GoogleAuth";

class LoginScreen extends React.Component {

    render() {
        return (
            <div className={classes.loginScreen}>
                <div className={classes.welcome}>
                    <Typography variant="h3" gutterBottom>
                        Welcome
                    </Typography>
                    <hr/>
                    <Typography variant="overline" display="block" gutterBottom>
                        to Groceries app
                    </Typography>
                </div>
                <GoogleAuth mode="blue"/>
            </div>
        );
    }
}

export default LoginScreen