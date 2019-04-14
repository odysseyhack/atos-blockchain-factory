import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Webcam from 'react-webcam';
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

class TakeFoto extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

    render() {
        const { classes } = this.props;

        const videoConstraints = {
            width: 720,
            height: 1280,
            facingMode: "user"
        };

        return (
            <div className={classes.root}>
                <div class="row">
                    <Typography variant="h8" color="inherit">
                    Voor gezichtsherkenning vergelijken we het camerabeeld met de foto van uw rijbewijs of identiteitsbewijs.
                    </Typography>
                </div>
                <div class="row" className={classes.root}>
                    <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    height="350"
                    width="350"
                    />
                    <Button
                        component={Link} to="/"
                        variant="contained"
                        color="primary"
                        margin="normal"
                        className={classes.button}
                        onClick={this.props.onTakeFoto}>
                        Maak foto
                    </Button>
                </div>
            </div>
        );
    };
  };

TakeFoto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TakeFoto);
