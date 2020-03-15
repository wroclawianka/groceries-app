import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';

import CategorySelector from "./CategorySelector";

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
    return (
        <List className={classes.list}>
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
    )
};

const CompletedItems = (props) => {
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
};

const ShoppingList = () => {
    const classes = useStyles();
    let shoppingList = [0, 1, 2, 3];
    let completedItems = ["A", "B", "C"];

    return (
        <div className={classes.root}>
            <CategorySelector/>
            <Items items={shoppingList}/>
            <CompletedItems items={completedItems}/>
        </div>
    )
};

export default ShoppingList;