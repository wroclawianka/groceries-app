import React from "react";
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {TextField} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {createItem} from '../../actions'
import classes from '../../styles/styles.module.css'

class AddItem extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({itemName: e.target.value});
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
            e.preventDefault();
            e.target.value = "";
        }
    };

    addItem = () => {
        this.props.addItem(this.state.itemName);
    };

    render() {
        return (
            <form
                noValidate
                autoComplete="off"
                className={classes.addItem}
            >
                <TextField
                    id="add-item"
                    label="Add item"
                    variant="outlined"
                    value={this.state.itemName}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <div className={classes.addBtn}>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="add"
                        disabled={!this.state.itemName}
                        onClick={this.addItem}
                    >
                        <AddIcon/>
                    </Fab>
                </div>
            </form>
        )
    }
}

const formWrapped = reduxForm({
    form: "itemCreate"
})(AddItem);

export default connect(null, {createItem})(formWrapped);