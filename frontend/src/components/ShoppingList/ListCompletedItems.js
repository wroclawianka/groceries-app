import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        textDecoration: "line-through"
    }
}));

const ListCompletedItems = (props) => {
    const classes = useStyles();
    let items = props.items || [];
    return (
        <List className={classes.list}>
            {items.map(item => {
                return (
                    <ListItem key={item._id}>
                        <ListItemText primary={item.label} className={classes.item}/>
                    </ListItem>
                );
            })}
        </List>
    )
};

export default ListCompletedItems;