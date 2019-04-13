import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField'

const styles = {
    root: {
        width: '100%',
      },
  };

class TxtBoxUp extends React.Component {
    render() {
        const { classes } = this.props;
        
        return(
            <div className={classes.root}>
            <Typography variant="h1" color="inherit">
            test
            </Typography>
        </div>
        );
    }
}

TxtBoxUp.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TxtBoxUp);
