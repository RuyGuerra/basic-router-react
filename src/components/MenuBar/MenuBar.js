import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuButton from '../MenuButton/MenuButton';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const MenuBar = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {children}
          </Typography>
          <MenuButton path="/">Home</MenuButton>
          <MenuButton path="/posts">Posts</MenuButton>
          <MenuButton path="/users">Users</MenuButton>
          <MenuButton path="/about">About</MenuButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(MenuBar);
