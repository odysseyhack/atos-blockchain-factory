import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profiel from '../images/identity-img.png'

const styles = {
    root: {
        paddingTop: '16px',
        width: '100%',
        textAlign: 'center'
    },
}

class Profiel extends React.Component {

    render() {
        const { classes } = this.props;

      return (
          <div className={classes.root}>
              <div class="row">

              </div>
              <div class="row">
                  <img src={profiel} alt="Profiel" />
              </div>
          </div>
        );
    };
  };

Profiel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profiel);
