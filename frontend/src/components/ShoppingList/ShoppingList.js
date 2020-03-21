import React from "react";
import {connect} from 'react-redux';
import _ from "lodash";
import AddItem from "./AddItem";
import CategorySelector from "./CategorySelector";
import ListItems from "./ListItems";
import ListCompletedItems from "./ListCompletedItems";
import classes from '../../styles/styles.module.css'
import {fetchItems, selectCategory} from "../../actions";

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsToBought: null,
            itemsCompleted: null,
        }
    }

    componentDidMount() {
        this.props.fetchItems(this.props.selectedCategory || "ALL");
    }

    getSnapshotBeforeUpdate(prevProps) {
        const selectedCategoryChanged = prevProps.categories.find(cat => cat.selected) !== this.props.categories.find(cat => cat.selected);
        const itemsChanged = prevProps.items !== this.props.items;
        return {selectedCategoryChanged, itemsChanged};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.selectedCategoryChanged) {
            const selectedCategory = this.props.categories.find(cat => cat.selected);
            this.props.fetchItems(selectedCategory._id);
        } else if (snapshot.itemsChanged) {
            let items = Object.values(this.props.items);
            items = _.groupBy(items, "completed");
            this.setState({
                ...this.state,
                itemsToBought: items.false,
                itemsCompleted: items.true
            });
        }
    }

    renderLists() {
        if (this.props.items) {
            return (
                <div>
                    <ListItems items={this.state.itemsToBought}/>
                    <ListCompletedItems items={this.state.itemsCompleted}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={classes.shoppingList}>
                <CategorySelector/>
                <AddItem/>
                {this.renderLists()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        categories: Object.values(state.categories)
    }
};

export default connect(
    mapStateToProps,
    {fetchItems, selectCategory}
)(ShoppingList);