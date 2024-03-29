import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import qrcode from '../images/qr-code.png'
import bovenkantid from '../images/bovenkant-id.png'

const styles = {
    root: {
        paddingTop: '16px',
        width: '100%',
        textAlign: 'center',
    },
}

class Settings extends React.Component {

    render() {
        const { classes } = this.props;

      return (
            <div className={classes.root}>
                <div class="row">

                </div>
                <div class="row">
                    <img src={bovenkantid} alt="bovenkant" className={classes.profiel} />
                    <br/>
                    <img src={qrcode} alt="QR" className={classes.profiel} />
                </div>
            </div>
        );
    };
  };

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);
