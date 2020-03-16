import React from "react";
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import CategorySelector from "./CategorySelector";
import {fetchItems, editItem} from '../../actions'
import ListItems from "./ListItems";
import AddItem from "./AddItem";
import classes from '../../styles/styles.module.css'


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
            <div className={classes.shoppingList}>
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