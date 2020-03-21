import React from "react";
import {connect} from 'react-redux';
import _ from "lodash";
import AddItem from "./AddItem";
import CategorySelector from "./CategorySelector";
import ListItems from "./ListItems";
import ListCompletedItems from "./ListCompletedItems";
import classes from '../../styles/styles.module.css'
import {fetchItems, createItem, selectCategory} from "../../actions";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: "0",
            items: null
        }
    }

    componentDidMount() {
        this.props.fetchItems(this.state.selectCategory);
    }

    selectCategory = (selectedCategory) => {
        this.setState({
            selectedCategory: selectedCategory
        });
        this.props.fetchItems(selectedCategory);
    };

    addItem = (item) => {
        this.props.createItem(item, this.state.selectedCategory)
    };

    renderLists() {
        if (this.props.items) {
            let items = Object.values(this.props.items);
            items = _.groupBy(items, "completed");
            const [toBought, completed] = [items.false, items.true];
            return (
                <div>
                    <ListItems items={toBought}/>
                    <ListCompletedItems items={completed}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={classes.shoppingList}>
                <CategorySelector
                    categories={this.props.categories}
                    selectedCategory={this.state.selectedCategory}
                    selectCategory={this.selectCategory}
                />
                <AddItem addItem={this.addItem}/>
                {this.renderLists()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        categories: state.categories
    }
};

export default connect(
    mapStateToProps,
    {fetchItems, createItem, selectCategory}
)(ShoppingList);