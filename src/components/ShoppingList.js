import React from "react";
import {connect} from 'react-redux';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [category, setCategory] = React.useState('');

    const renderOptions = () => {
        return props.categories.map(category => {
            return (
                <MenuItem value={category.id}>{category.label}</MenuItem>
            )
        })
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select value={category}>{renderOptions()}</Select>
            </FormControl>
        </div>
    )
};

const mapStateToProps = state => {
    return {categories: state.categories};
};

export default connect(mapStateToProps)(ShoppingList);