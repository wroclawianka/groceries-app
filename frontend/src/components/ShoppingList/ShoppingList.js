import React from "react";
import {connect} from 'react-redux';
import AddItem from "./AddItem";
import CategorySelector from "./CategorySelector";
import ListItems from "./ListItems";
import ListCompletedItems from "./ListCompletedItems";
import classes from '../../styles/styles.module.css'
import {fetchCategories, fetchItems, editItem} from '../../actions'

class ShoppingList extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchItems();
    }

    renderCategoriesSelector() {
        if(this.props.categories) {
            return <CategorySelector/>
        }
    }

    render() {
        return (
            <div className={classes.shoppingList}>
                {this.renderCategoriesSelector()}
                <AddItem/>
                <ListItems items={this.props.itemList.items}/>
                <ListCompletedItems items={this.props.itemList.completed}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemList: state.itemList || {},
        categories: state.categories
    }
};

export default connect(
    mapStateToProps,
    {fetchCategories, fetchItems, editItem}
)(ShoppingList);