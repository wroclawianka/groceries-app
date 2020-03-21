import React from "react";
import {connect} from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {fetchCategories} from '../../actions'
import classes from '../../styles/styles.module.css'

class CategorySelector extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    handleChange = e => {
        this.props.selectCategory(e.target.value);
    };

    render() {
        if (this.props.categories) {
            let categories = Object.values(this.props.categories);
            return (
                <div className={classes.categorySelector}>
                    <FormControl className={classes.categorySelectorForm}>
                        <Select value={this.props.selectedCategory} onChange={this.handleChange}>
                            {categories.map(category => {
                                return (
                                    <MenuItem
                                        value={category._id}
                                        key={category._id}
                                    >
                                        {category.label}
                                    </MenuItem>
                                )
                            })
                            }</Select>
                    </FormControl>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

export default connect(
    mapStateToProps,
    {fetchCategories}
)(CategorySelector);