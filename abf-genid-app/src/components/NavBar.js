import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Person from '@material-ui/icons/Person';
import Settings from '@material-ui/icons/Settings';
import AccountBox from '@material-ui/icons/AccountBox';
import HelpOutline from '@material-ui/icons/HelpOutline';
import FilterCenterFocus from '@material-ui/icons/FilterCenterFocus';

const styles = {
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
};

class NavBar extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
    
        return (
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Toon ID" icon={<AccountBox />} />
            <BottomNavigationAction label="Scan" icon={<FilterCenterFocus />} />
            <BottomNavigationAction label="Profiel" icon={<Person />} />
            <BottomNavigationAction label="Help" icon={<HelpOutline />} />
            <BottomNavigationAction label="Instellingen" icon={<Settings />} />
          </BottomNavigation>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
