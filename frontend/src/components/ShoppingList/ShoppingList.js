import React from "react";
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import CategorySelector from "./CategorySelector";
import {fetchItems, editItem} from '../../actions'
import ListItems from "./ListItems";
import AddItem from "./AddItem";

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "280px",
        width: "fit-content",
        margin: "auto"
    }
}));


/*const CompletedItems = (props) => {
    const classes = useStyles();
    const handleToggle = () => {};

    return (
        <List
            subheader={<ListSubheader component="div">Completed</ListSubheader>}
            className={classes.list}
        >
            {props.items.map(value => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} button>
                        <ListItemText id={labelId} primary={`${value}`}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};*/

class ShoppingList extends React.Component{
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div>
                <CategorySelector/>
                <AddItem/>
                <ListItems items={this.props.itemList.items}  setAsBought={this.props.editItem}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemList: state.itemList || {}
    }
};

export default connect(
    mapStateToProps,
    {fetchItems, editItem}
)(ShoppingList);