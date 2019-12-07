import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import logo from './logo.png';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  headline: {
    padding: theme.spacing(2, 4, 3),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: '1.22rem',
    alignItems: 'center',
  },
  loginForm: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2, 4, 3),
    fontSize: '1.5rem',
  },
  loginInput: {
    padding: theme.spacing(0, 1, 1),
  },
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <Link color="inherit" href="https://material-ui.com/">
        LavaLynx MarTech Tools |
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClientLogin = () => {
    setTimeout(() => {
      alert('Incorrect Login Attempt');
    }, 1000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div variant="body2" color="textSecondary" align="center">
      <Button variant="contained" color="primary" onClick={handleOpen} className={classes.loginForm}>
        Client Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.headline}>
              <h2>LavaLynx Client Portal</h2>
              <img src={logo} alt="Logo" width="100px" />
            </div>
            <Container variant="body2" color="textSecondary" align="center">
              <Box className={classes.paper}>
                <Typography variant="h4" gutterBottom>Login</Typography>
                <Typography variant="body1" gutterBottom>
                  Login to Your LavaLynx 0.1.8 Account
                </Typography>
                <Container maxWidth="sm">
                  <Box my={4}>
                    <form className={classes.loginForm} noValidate autoComplete="off">
                      <TextField className={classes.loginInput} id="outlined-basic" label="Username" variant="outlined" />
                      <TextField id="outlined-basic" label="Password" variant="outlined"/>
                    </form>
                  </Box>
                  <Button type="button" variant="contained" color="secondary" onClick={handleClientLogin}>
                    Client Login
                  </Button>
                </Container>
              </Box>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const divStyle = {
  textAlign: 'center',
  margin: '0 auto',
  display: 'block'
};

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <img src={logo} alt="Logo" width="150px" style={divStyle}/>
        <Typography variant="h4" component="h1" gutterBottom style={divStyle}>
              LavaLynx Client Portal
        </Typography>
        <ProTip />
        <AnimatedModal />
        <Copyright />
      </Box>
    </Container>
  );
}
