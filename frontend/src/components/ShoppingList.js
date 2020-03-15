import React from "react";
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';

import CategorySelector from "./CategorySelector";
import {fetchItems} from '../actions'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "280px",
        width: "fit-content",
        margin: "auto"
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Items = (props) => {
    const classes = useStyles();
    const handleToggle = () => {};
    let items = props.items || [];
    return (
        <List className={classes.list}>
            {items.map(item => {
                const labelId = `checkbox-list-secondary-label-${item._id}`;
                return (
                    <ListItem key={item._id} button>
                        <ListItemText id={labelId} primary={item.label}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(item._id)}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
};

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
    //const classes = useStyles();
    //let shoppingList = [0, 1, 2, 3];
    //let completedItems = ["A", "B", "C"];

    render() {
        return (
            <div>
                <CategorySelector/>
                <Items items={this.props.itemList.items}/>
                {/*<CompletedItems items={["A", "B", "C"]}/>*/}
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
    {fetchItems}
)(ShoppingList);