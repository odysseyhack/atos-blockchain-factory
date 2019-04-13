import React from 'react';
import Webcam from "react-webcam";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {
        width: '100%',
        textAlign: 'center'
    },
};

class Login extends React.Component {

    render() {
        const { classes } = this.props;
      
      return (
            <div className={classes.root}>
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="filled"
                />
            </div>
        );
    };
  };

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
