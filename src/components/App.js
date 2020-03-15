import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopBar from "./TopBar";
import ShoppingList from "./ShoppingList";
import BottomNav from "./BottomNav";

const App = () => {
    return (
        <div>
            <TopBar/>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={ShoppingList}/>
                </div>
            </BrowserRouter>
            <BottomNav/>
        </div>
    );
};

export default App;
