import React from "react";
import {connect} from 'react-redux';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {selectCategory} from "../../actions";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "min-content",
            margin: "auto",
            padding: "20px 5px"
        },
        formControl: {
            minWidth: 200,
        },
    }),
);

const CategorySelector = (props) => {
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
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <Select value={props.selectedCategory} onChange={handleChange}>{renderOptions()}</Select>
            </FormControl>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        categories: state.categories.list,
        selectCategory: state.categories.selectCategory,
        selectedCategory: state.categories.selected || state.categories.list[0].id
    };
};

export default connect(mapStateToProps, {selectCategory})(CategorySelector);