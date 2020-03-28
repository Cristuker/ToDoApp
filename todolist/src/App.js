import React from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography, makeStyles, Fab } from '@material-ui/core';
import { faTasks, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tasks from './Components/Tasks/index';
import CreateTask from './Components/createTask/index';
import 'typeface-roboto';


let tasks = [{
  title: 'Its a task',
  time: '00:10',
  status: 'pending'
},
{
  title: 'its no a task',
  time: '00:20',
  status: 'done'
},
{
  title: 'React boys',
  time: '09:00',
  status: 'pending'
},
{
  title: 'its nk',
  time: '24:00',
  status: 'done'
},  {
  title: 'task',
  time: '20:40',
  status: 'done'
},  {
  title: 'itsk',
  time: '03:20',
  status: 'pending'
},  {
  title: 'task',
  time: '21:40',
  status: 'pending'
},
{
  title: 'its nsdasda a task',
  time: '05:60',
  status: 'pending'
},
{
  title: 'its no\dgfsdf a task',
  time: '59:60',
  status: 'pending'
},
{
  title: 'its no adjdjbsd task',
  time: '45:60',
  status: 'pending'
},
{
  title: 'its vajdsdfntask',
  time: '50:60',
  status: 'done'
}]


const useStyles = makeStyles( theme =>({
  mainBox: {
    marginTop: '60px',
    border: '2px solid black',
    height: '40em',
    borderRadius:'6px',
    backgroundColor: '#F5F0F0',
    width: '100%',
    padding: 0,
    overflow: 'auto'
  },
  title: {
    textAlign: 'center',
    borderRadius:'6px',
  },
  container: {
    width: '100%',
    borderRadius:'6px',
    backgroundColor: '#F5F0F0',
    border: '2px solid black',
    marginTop: '40px',
    height: '5em'
  },
  addButton:{
    position:'absolute',
    margin: theme.spacing(1),
    right: '20%',
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
        <Tasks tasks={tasks} className={classes.navbar} ></Tasks>
        <Fab variant="round" aria-label="add" color="secondary" className={classes.addButton}><CreateTask></CreateTask></Fab>
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
