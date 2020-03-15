import React from "react";
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {TextField} from "@material-ui/core";
import {createItem} from '../../actions'

class AddItem extends React.Component {
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.createItem(e.target.value);
        }
    };

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField id="add-item" label="Add item" variant="outlined" onKeyDown={this.handleKeyDown}/>
            </form>
        )
    }
}

const formWrapped = reduxForm({
    form: "streamCreate"
})(AddItem);

export default connect(null, {createItem})(formWrapped);