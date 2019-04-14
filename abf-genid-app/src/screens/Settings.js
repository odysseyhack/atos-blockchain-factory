import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
    root: {},
}

class Settings extends React.Component {

    render() {
        const { classes } = this.props;

      return (
            <div className={classes.root}>

            </div>
        );
    };
  };

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);
