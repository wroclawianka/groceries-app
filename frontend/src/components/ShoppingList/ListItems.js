import React from "react";
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import BoughtItemModal from "./BoughtItemModal";
import {selectItem} from '../../actions'

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
    let selectedItem = null;

    const renderModal = () => {
        if (openModal) {
            return <BoughtItemModal item={selectedItem}/>
        }
    };

    return (
        <div>
            <List className={classes.list}>
                {items.map(item => {
                    const labelId = `checkbox-list-secondary-label-${item._id}`;
                    const handleOpen = () => {
                        props.selectItem(item);
                        setOpenModal(true);
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
                        </ListItem>
                    );
                })}
            </List>
            {renderModal()}
        </div>
    )
};

export default connect(null, {selectItem})(ListItems);