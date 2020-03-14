import React from "react";
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

const ShoppingList = () => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select value={category}>
                    <MenuItem value={1}>Category</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default ShoppingList