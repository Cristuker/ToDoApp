import React from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography, makeStyles, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { faTasks, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Components/Tasks/index';
import 'typeface-roboto'


const useStyles = makeStyles( theme =>({
  mainBox: {
    marginTop: '60px',
    border: '1px solid black',
    height: '40em',
    backgroundColor: '#F5F0F0',
    width: '100%',
    padding: 0,
    overflow: 'auto'
  },
  title: {
    textAlign: 'center',
  },
  container: {
    width: '100%',
    backgroundColor: '#F5F0F0',
    border: '1px solid black',
    marginTop: '40px',
    height: '5em'
  },
  addButton:{
    position:'relative',
    margin: theme.spacing(1),
    marginRight: '1em',
    top:'75%',
  },
  footer:{
    textAlign: 'left',
    marginTop: '10px'
  }
}))

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "'Noto Sans JP', sans-serif",
      'Arial'
    ]
  }
})

function App() {

  const classes = useStyles();


  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="h2" className={classes.title} >
        <FontAwesomeIcon icon={faTasks} /> To Do List
      </Typography>
      <Container className={classes.mainBox}>
        <Navbar className={classes.navbar} ></Navbar>
        <Fab variant="round" aria-label="add" color="secondary" className={classes.addButton}><Add/></Fab>
      </Container>
      <Container className={classes.container} >
      <Typography variant="h3" component="h2" className={classes.footer} >
        <FontAwesomeIcon icon={faClock} /> Tempo gasto: 10:00
      </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
