import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopBar from "./TopBar/TopBar";
import ShoppingList from "./ShoppingList/ShoppingList";
import BottomNav from "./BottomNav/BottomNav";

class App extends React.Component {
    render() {
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
    }
}

export default App;
