import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        width: '100%',
        top: 0,
      },
  };

class SimpleAppBar extends React.Component {
    
    render() {
        const { classes } = this.props;
        
        return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                    {this.props.headerTitle}
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }

}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SimpleAppBar);
