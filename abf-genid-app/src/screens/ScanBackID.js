import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Webcam from 'react-webcam';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Scanner from '../components/Scanner';

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

class ScanBackID extends React.Component {
    render() {
        const { classes } = this.props;

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div className={classes.root}>
                <Scanner
                    text="Maak foto van de achterkant van uw rijbewijs of identiteitsbewijs."
                    vidCon={videoConstraints}
                    linkTo="/take-photo/"
                    camWidth="350"
                    camHeigth="350"
                    buttonText="Scan Achterkant"
                />
            </div>
        );
    };
  };

ScanBackID.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanBackID);
