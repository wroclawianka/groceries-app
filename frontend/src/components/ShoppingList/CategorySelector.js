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
        let category = event.target.value;
        if (category === 0) category = null;
        props.selectCategory(category);
    };

    if (props.categories) {
        let selectedCategory = props.categories.selected || 0;
        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <Select value={selectedCategory} onChange={handleChange}>
                        <MenuItem value={0} key="all">All</MenuItem>
                        {props.categories.list.map(category => {
                            return (
                                <MenuItem value={category._id} key={category._id}>{category.label}</MenuItem>
                            )
                        })
                        }</Select>
                </FormControl>
            </div>
        )
    } else {
        return null
    }
};

const mapStateToProps = state => {
    return {
        categories: state.categories
    };
};

export default connect(
    mapStateToProps,
    {selectCategory}
)(CategorySelector);