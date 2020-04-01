import React from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography, makeStyles, Fab } from '@material-ui/core';
import Tasks from './Components/Navbar/index';
import CreateTask from './Components/createTask/index';
import Routes from './routes';
import WorkTime from './Components/WorkTime/index';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root:{
    width: '50%'
  },
  mainBox: {
    marginTop: '60px',
    border: '2px solid black',
    height: '40em',
    borderRadius: '6px',
    backgroundColor: '#F5F0F0',
    width: '100%',
    padding: 0,
    overflow: 'auto',
  },
  title: {
    textAlign: 'center',
    borderRadius: '6px',
  },
  container: {
    width: '100%',
    borderRadius: '6px',
    backgroundColor: '#F5F0F0',
    border: '2px solid black',
    marginTop: '40px',
    height: '5em'
  },
  addButton: {
    position: 'absolute',
    margin: theme.spacing(1),
    textAlignLast:'right',
    paddingRight: '24rem',
    top: '7rem'
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

  return (<Container className={classes.root}>
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="h2" className={classes.title} >
         <span role="img" aria-label="book of tasks"> 📝</span> TO DO LIST
      </Typography>
      <Container className={classes.mainBox}>
        <Tasks className={classes.navbar} ></Tasks>
        <Routes />
      </Container>
      <Container className={classes.addButton} >
        <Fab variant="round" size="medium" color="secondary" ><CreateTask></CreateTask></Fab>
      </Container>
      <Container className={classes.container} >
        <WorkTime />
      </Container>
    </ThemeProvider>
    </Container>
  );
}

export default App;
