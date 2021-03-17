import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {styled} from '@material-ui/core/styles'
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';



const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: '400',
    backgroundColor: 'grey',
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    // <Grid>
    <Dialog  open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
   
  >
    {/* <div  style={modalStyle} className={classes.paper}> */}
    <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
      {/* <h2 id="simple-modal-title">Login</h2> */}
      {/* <p id="simple-modal-description">test description</p> */}
   
      <DialogContent >
          <DialogContentText id="alert-dialog-slide-description">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={props.handleInputName}
          />
          {/* Name:
          <input type="text" name="nameInput"  />
        */}
     
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            onChange={props.handleInputPassword}
          />
          {/* Password:
          <input type="text" name="passwordInput" onChange={props.handleInputPassword} />
        */}
        
        </DialogContentText>
        </DialogContent>
       
        <DialogActions>
        {/* <input id="simple-modal-description" type="submit" value="Submit" onClick={props.changeUser} /> */}
        <Button  variant='contained' color='primary'  onClick={props.changeUser}>Login</Button>
        <Button  variant='contained' color='secondary' onClick>Close</Button>
        </DialogActions>                  
    
    {/* </div> */}
    </Dialog>
    // </Grid>
  );

  return (
    <div>
      <MyButton type="button" onClick={handleOpen}>
        Login
      </MyButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
