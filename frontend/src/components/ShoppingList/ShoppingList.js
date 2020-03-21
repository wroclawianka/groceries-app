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
            selectedCategory: "0",
            itemsToBought: null,
            itemsCompleted: null,
        }
    }

    componentDidMount() {
        this.props.fetchItems(this.state.selectCategory);
    }

    getSnapshotBeforeUpdate(prevProps) {
        return {updateRequired: prevProps.items !== this.props.items};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.updateRequired) {
            let items = Object.values(this.props.items);
            items = _.groupBy(items, "completed");
            this.setState({
                ...this.state,
                itemsToBought: items.false,
                itemsCompleted: items.true
            });
        }
    }

    selectCategory = (selectedCategory) => {
        this.setState({
            selectedCategory: selectedCategory
        });
        this.props.fetchItems(selectedCategory);
    };

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
                <CategorySelector
                    selectedCategory={this.state.selectedCategory}
                    selectCategory={this.selectCategory}
                />
                <AddItem/>
                {this.renderLists()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
};

export default connect(
    mapStateToProps,
    {fetchItems, selectCategory}
)(ShoppingList);