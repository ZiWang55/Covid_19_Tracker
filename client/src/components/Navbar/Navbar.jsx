import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
  button: {
    marginRight: 10,
    textDecoration: 'none'
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         <Typography className={classes.title}>
            <Link to="/" > 
              Home  
            </Link>
        </Typography>
      
            <Link to="/settings" className={window.location.pathname === '/settings'}> 
             <Button className={classes.button} variant="contained" color="primary">  Settings          </Button>
            </Link>

          <Link to="/newuser" className={window.location.pathname === '/newuser'}>  <Button className={classes.button} variant="contained" color="primary">  
            Create User </Button>
            </Link>
        
          { props.authentication === "false" ? <Modal changeUser={props.changeUser} handleInputName={props.handleInputName} handleInputPassword={props.handleInputPassword} title="Login" /> : <Modal changeUser={props.changeUser} title="Logout" /> }
        </Toolbar>
      </AppBar>
    </div>
  );
}
