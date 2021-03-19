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
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
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

          {props.authentication === "false" ? (
            <IconButton>
            <Modal
              changeUser={props.changeUser}
              handleInputName={props.handleInputName}
              handleInputPassword={props.handleInputPassword}
              title="Login"
            /></IconButton>
          ) : (
            // <Modal changeUser={props.changeUser} title="Logout" />
            <IconButton onClick={props.logout}>Logout</IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
