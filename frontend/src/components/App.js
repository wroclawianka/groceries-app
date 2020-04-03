import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopBar from "./TopBar/TopBar";
import ShoppingList from "./ShoppingList/ShoppingList";
import {connect} from "react-redux";
import LoginScreen from "./Common/LoginScreen";

class App extends React.Component {
    renderRouter() {
        if (this.props.auth.isSignedIn) {
            return <BrowserRouter>
                <div>
                    <Route path="/" exact component={ShoppingList}/>
                </div>
            </BrowserRouter>
        } else if (this.props.auth.isSignedIn === false) {
            return <LoginScreen/>
        }
    }

    render() {
        return (
            <div>
                <TopBar/>
                {this.renderRouter()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(App);