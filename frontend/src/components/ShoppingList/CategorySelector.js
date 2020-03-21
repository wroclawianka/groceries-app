import React from "react";
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

    const handleChange = e => {
        props.selectCategory(e.target.value);
    };

    if (props.categories) {
        let categories = Object.values(props.categories);
        return (
            <div className={classes.root}>
                {props.selectedCategory}
                <FormControl className={classes.formControl}>
                    <Select value={props.selectedCategory} onChange={handleChange}>
                        {categories.map(category => {
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

export default CategorySelector