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
        width: '225px',
        height: '45px',
    }
};

class LoginDigiD extends React.Component {

    render() {
        const { classes } = this.props;

      return (
            <div className={classes.root}>
                <div class="row">
                <Typography variant="h8" color="inherit">
                In deze app wordt u eenmalig gevraagd uw gebruikersnaam en wachtwoord in te vullen. Dit is nodig om de app te activeren.
                </Typography>
                </div>
                <div class="row">
                <TextField
                  id="outlined-with-placeholder"
                  label="DigiD gebruikersnaam"
                  placeholder="Gebruikersnaam"
                  // className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
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
                <div class="row" className={classes.root}>
                    <Button
                        component={Link} to="/scan-front/"
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

LoginDigiD.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LoginDigiD);
