import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoughtItemModal from "./BoughtItemModal";

const useStyles = makeStyles(theme => ({
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const ListItems = (props) => {
    const [openModal, setOpenModal] = React.useState(false);
    const classes = useStyles();
    let items = props.items || [];
    return (
        <List className={classes.list}>
            {items.map(item => {
                const labelId = `checkbox-list-secondary-label-${item._id}`;
                const handleOpen = () => {
                    setOpenModal(true);
                };
                const handleClose = () => {
                    setOpenModal(true);
                    props.setAsBought(item._id, true);
                };
                return (
                    <ListItem key={item._id} button>
                        <ListItemText id={labelId} primary={item.label}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleOpen}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                        <BoughtItemModal open={openModal} id={item._id} title={item.label} handleClose={handleClose}/>
                    </ListItem>
                );
            })}
        </List>
    )
};

export default ListItems;