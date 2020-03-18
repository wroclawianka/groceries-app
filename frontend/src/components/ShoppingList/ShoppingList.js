import React from "react";
import {connect} from 'react-redux';
import AddItem from "./AddItem";
import CategorySelector from "./CategorySelector";
import ListItems from "./ListItems";
import ListCompletedItems from "./ListCompletedItems";
import classes from '../../styles/styles.module.css'
import {fetchCategories, fetchItems} from "../../actions";

class ShoppingList extends React.Component {
    componentDidMount() {
        this.fetchItemFromSelectedCategory();
    }

    componentDidUpdate(prevProps) {
        if (this.props.categories && (prevProps !== this.props)) {
            this.fetchItemFromSelectedCategory()
        }
    }

    fetchItemFromSelectedCategory() {
        let category = (this.props.categories) ? this.props.categories.selected : null;
        this.props.fetchItems(category);
    }

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
        itemList: state.itemList || {},
        categories: state.categories
    }
};

export default connect(mapStateToProps, {fetchCategories, fetchItems})(ShoppingList);