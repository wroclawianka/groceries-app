import React from "react";
import {connect} from 'react-redux';
import _ from "lodash";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import BoughtItemModal from "./BoughtItemModal";
import {selectItem, editItem} from '../../actions'
import classes from '../../styles/styles.module.css'

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            items: (_.isEmpty(this.props.itemList)) ? [] : this.props.itemList.items,
            selectedItem: null
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemList !== this.props.itemList) {
            this.setState({
                ...this.state,
                items: (_.isEmpty(this.props.itemList)) ? [] : this.props.itemList.items,
            })
        }
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
        return (
            <div>
                <List classes={classes.itemsList}>
                    {this.state.items.map(item => {
                        const labelId = `checkbox-list-secondary-label-${item._id}`;
                        const handleOpen = () => {
                            this.props.selectItem(item);
                            this.setState({
                                ...this.state,
                                openModal: true,
                                selectedItem: item
                            })
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
                {this.renderModal()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemList: state.itemList || {},
    }
};

export default connect(mapStateToProps, {selectItem, editItem})(ListItems);