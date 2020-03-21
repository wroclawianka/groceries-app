import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class BoughtItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            item: {
                ...props.item,
                cost: 0
            },
        };
    }

    handleChange = (event) => {
        this.setState({
            item: {
                ...this.state.item,
                cost: event.target.value
            }
        });
    };

    handleClose = () => {
        this.setState({open: false});
        const item = {
            ...this.state.item,
            completed: true
        };
        this.props.editItem(item);
    };

    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    {this.state.item.label}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Price"
                        value={this.state.item.cost}
                        type="number"
                        fullWidth
                        onChange={this.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default BoughtItemModal;