import React from "react";
import {connect} from 'react-redux';
import AddItem from "./AddItem";
import CategorySelector from "./CategorySelector";
import ListItems from "./ListItems";
import ListCompletedItems from "./ListCompletedItems";
import classes from '../../styles/styles.module.css'

class ShoppingList extends React.Component {
    render() {
        return (
            <div className={classes.shoppingList}>
                <CategorySelector/>
                <AddItem/>
                <ListItems items={this.props.itemList.items}/>
                <ListCompletedItems items={this.props.itemList.completed}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemList: state.itemList || {}
    }
};

export default connect(mapStateToProps)(ShoppingList);