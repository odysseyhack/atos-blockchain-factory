import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Webcam from 'react-webcam';


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

class ScanFrontID extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

    render() {
        const { classes } = this.props;

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div className={classes.root}>
                <div class="row">
                    <Typography variant="h8" color="inherit">
                    Maak foto van de voorkant van uw rijbewijs of identiteitsbewijs.
                    </Typography>
                </div>
                <div class="row" className={classes.root}>
                    <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        margin="normal"
                        className={classes.button}
                        onClick={this.capture}>
                        Scan ID Kaart
                    </Button>
                </div>
            </div>
        );
    };
  };

ScanFrontID.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScanFrontID);
