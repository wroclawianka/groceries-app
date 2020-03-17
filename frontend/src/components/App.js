import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopBar from "./TopBar/TopBar";
import ShoppingList from "./ShoppingList/ShoppingList";
import BottomNav from "./BottomNav/BottomNav";
import {connect} from "react-redux";
import {fetchCategories, fetchItems} from "../actions";

class App extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchItems();
    }

    render() {
        return (
            <div>
                <TopBar/>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={ShoppingList}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, {fetchCategories, fetchItems})(App);