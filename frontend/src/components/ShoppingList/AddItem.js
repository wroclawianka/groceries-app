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
        this.setState({itemName: e.target.value});
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addItem();
            e.preventDefault();
        }
    };

    addItem = () => {
        const selectedCategory = this.props.categories.find(cat => cat.selected);
        this.props.createItem(this.state.itemName, selectedCategory.id);
        this.setState({itemName: ''});
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

const mapStateToProps = (state) => {
    return {categories: Object.values(state.categories)}
};

const formWrapped = reduxForm({
    form: "itemCreate"
})(AddItem);

export default connect(mapStateToProps, {createItem})(formWrapped);