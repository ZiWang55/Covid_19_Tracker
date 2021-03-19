import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 50
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" >
              Home
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/settings" >
              Settings
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/newuser" >
              Create User
            </Link>
          </Typography>
          { props.authentication === "false" ? <Modal changeUser={props.changeUser} handleInputName={props.handleInputName} handleInputPassword={props.handleInputPassword} title="Login" /> : <Modal changeUser={props.changeUser} title="Logout" /> }
        </Toolbar>
      </AppBar>
    </div>
  );
}
