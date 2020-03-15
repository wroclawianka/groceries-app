import React from 'react';
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";
import {signIn, signOut} from "../../actions";

const buttonStyle = {
    color: "#ffffff"
};

class GoogleAuth extends React.Component {
    state = {isSignedIn: null, userId: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '742999549109-11mc9nbqfp0n75cmmd0ugp0mod9b2cqc.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get(), userId: this.auth.currentUser.get().getId()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onLoginClick = () => {
        this.auth.signIn();
    };

    onLogOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        switch (this.props.isSignedIn) {
            case true:
                return (
                    <Button onClick={this.onLogOutClick} style={buttonStyle}>Logout</Button>
                );
            case false:
                return (
                    <Button onClick={this.onLoginClick} style={buttonStyle}>Login</Button>
                );
            default:
                return null
        }
    }

    render() {
        return this.renderAuthButton()
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);