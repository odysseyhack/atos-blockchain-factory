import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Webcam from 'react-webcam';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


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

class Scanner extends React.Component {
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div class="row">
                    <Typography variant="h8" color="inherit">
                    {this.props.text}

                    </Typography>
                </div>
                <div class="row" className={classes.root}>
                    <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    height={this.props.camHeigth}
                    width={this.props.camWidth}
                    />
                    <Button
                        component={Link} to={this.props.linkTo}
                        variant="contained"
                        color="primary"
                        margin="normal"
                        videoConstraints={this.props.vidCon}
                        className={classes.button}
                        onClick={this.props.onTakeFoto}>
                        Scan ID Kaart
                    </Button>
                </div>
            </div>
        );
    };
  };

Scanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Scanner);
