import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import List from '@material-ui/icons/List';
import PieChart from '@material-ui/icons/PieChart';
import Restaurant from '@material-ui/icons/Restaurant';

const useStyles = makeStyles({
    root: {
        width: 500
    },
});

function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
            <BottomNavigationAction label="List" value="list" icon={<List/>}/>
            <BottomNavigationAction label="Stats" value="stats" icon={<PieChart/>}/>
            <BottomNavigationAction label="Recipes" value="recipes" icon={<Restaurant/>}/>
        </BottomNavigation>
    );
}


export default BottomNav
