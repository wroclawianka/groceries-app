import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
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

const ShoppingList = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    let shoppingList = [0, 1, 2, 3];
    let completedList = ["A", "B", "C"];

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const renderList = (list) => {
        return (
            list.map(value => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} button>
                        <ListItemText id={labelId} primary={`Line item ${value}`}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })
        )
    };

    return (
        <div className={classes.root}>
            <CategorySelector/>
            <List dense className={classes.list}>{renderList(shoppingList)}</List>
            {/* Completed */}
            <List dense className={classes.list}>{renderList(completedList)}</List>
        </div>
    )
};


export default ShoppingList;