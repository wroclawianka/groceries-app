import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    }),
);

const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Groceries App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
