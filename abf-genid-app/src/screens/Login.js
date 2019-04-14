import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
    root: {
        paddingTop: '16px',
        width: '100%',
        textAlign: 'center'
    },
    button: {
        width: '225px'
    }
};

class Login extends React.Component {

    render() {
        const { classes } = this.props;

      return (
            <div className={classes.root}>
                <div class="row">
                    <Typography variant="h8" color="inherit">
                    Voer pincode in om in te loggen.
                    </Typography>
                </div>
                <div class="row">
                <TextField
                    id="outlined-password-input"
                    label="Wachtwoord"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                </div>
                <div class="row">
                <Button
                    component={Link} to="/login-digid/"
                    variant="contained"
                    color="primary"
                    margin="normal"
                    className={classes.button}>
                Volgende
            </Button>
            </div>
            </div>
        );
    };
  };

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
