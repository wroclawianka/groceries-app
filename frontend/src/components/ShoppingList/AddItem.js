import React from "react";
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {TextField} from "@material-ui/core";
import {createItem} from '../../actions'
import classes from '../../styles/styles.module.css'

class AddItem extends React.Component {
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.createItem(e.target.value);
        }
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
                    onKeyDown={this.handleKeyDown}
                />
            </form>
        )
    }
}

const formWrapped = reduxForm({
    form: "itemCreate"
})(AddItem);

export default connect(null, {createItem})(formWrapped);