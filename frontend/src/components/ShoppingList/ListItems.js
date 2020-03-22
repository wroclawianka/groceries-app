import React from "react";
import {connect} from 'react-redux';
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import BoughtItemModal from "./BoughtItemModal";
import {editItem} from '../../actions'
import classes from '../../styles/styles.module.css'

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            selectedItem: null
        };
    }

    editItem = (item) => {
        this.setState({
            ...this.state,
            openModal: false
        });
        this.props.editItem(item)
    };

    renderModal = () => {
        if (this.state.openModal) {
            return <BoughtItemModal
                item={this.state.selectedItem}
                editItem={this.editItem}
            />
        }
    };

    render() {
        if (this.props.items) {
            return (
                <div>
                    <List className={classes.itemsList}>
                        {this.props.items.map(item => {
                            const handleOpen = () => {
                                this.setState({
                                    ...this.state,
                                    openModal: true,
                                    selectedItem: item
                                })
                            };
                            return (
                                <ListItem key={item.id} button>
                                    <ListItemText primary={item.label}/>
                                    <ListItemSecondaryAction>
                                        <Checkbox edge="end"  onChange={handleOpen}/>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                    {this.renderModal()}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default connect(null, {editItem})(ListItems);