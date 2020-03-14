import React from "react";
import {connect} from 'react-redux';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {selectCategory} from "../actions";

const useStyles = makeStyles((theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

const ShoppingList = (props) => {
    const classes = useStyles();

    const handleChange = event => {
        props.selectCategory(event.target.value)
    };

    const renderOptions = () => {
        return props.categories.map(category => {
            return (
                <MenuItem value={category.id} key={category.id}>{category.label}</MenuItem>
            )
        })
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select value={props.selectedCategory} onChange={handleChange}>{renderOptions()}</Select>
            </FormControl>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.categories,
        selectCategory: state.selectCategory,
        selectedCategory: state.selectedCategory || state.categories[0].id
    };
};

export default connect(mapStateToProps, {selectCategory})(ShoppingList);