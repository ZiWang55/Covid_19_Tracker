import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 50,
  },
  button: {
    marginRight: 10,
  },
  logbutton: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <>
    {props.authentication === "false" ? (

    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" className={classes.title}>
            <Link to="/">
              <Button  variant="contained"
              color="primary">
                <HomeRoundedIcon fontSize="large" />
              </Button>
            </Link>
          </Typography>

          <Link to="/newuser">
            {" "}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              <PersonAddRoundedIcon fontSize="large" />{" "}
            </Button>
          </Link>

            <Modal
              changeUser={props.changeUser}
              handleInputName={props.handleInputName}
              handleInputPassword={props.handleInputPassword}
              title="Login"
            />
        </Toolbar>
      </AppBar>
    </div>
    ) 
    : (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" className={classes.title}>
            <Link to="/">
              <Button  variant="contained"
              color="primary">
                <HomeRoundedIcon fontSize="large" />
              </Button>
            </Link>
          </Typography>

          <Link to="/members">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              {" "}
              <HelpIcon fontSize="large" />{" "}
            </Button>
          </Link>

          <Link to="/settings">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              {" "}
              <SettingsRoundedIcon fontSize="large" />{" "}
            </Button>
          </Link>

          <Button className={classes.logbutton} variant='contained' onClick={props.logout} title="Logout">Logout</Button>
          
        </Toolbar>
      </AppBar>
    </div>
    )}
    </>
  );
}
