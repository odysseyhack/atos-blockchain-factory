import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Person from '@material-ui/icons/Person';
import Settings from '@material-ui/icons/Settings';
import AccountBox from '@material-ui/icons/AccountBox';
import FilterCenterFocus from '@material-ui/icons/FilterCenterFocus';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
    bottomAct: {
      minWidth: "20px",
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
            <BottomNavigationAction className="bot-act" label="Toon ID" icon={<AccountBox />} component={Link} to="/id"/>
            <BottomNavigationAction className="bot-act" label="Scan" icon={<FilterCenterFocus />} component={Link} to="/scan"/>
            <BottomNavigationAction className="bot-act" label="Profiel" icon={<Person />} component={Link} to="/profile"/>
            <BottomNavigationAction className="bot-act" label="Instellingen" icon={<Settings />} component={Link} to="/settings"/>
          </BottomNavigation>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
