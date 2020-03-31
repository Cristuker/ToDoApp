import React, { useEffect, useState } from 'react';
import { Container, createMuiTheme, ThemeProvider, Typography, makeStyles, Fab } from '@material-ui/core';
import { faTasks, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tasks from './Components/Navbar/index';
import CreateTask from './Components/createTask/index';
import Routes from './routes';
import 'typeface-roboto';
import { showTodos } from './services/pouhdb';

const useStyles = makeStyles(theme => ({
  mainBox: {
    marginTop: '60px',
    border: '2px solid black',
    height: '40em',
    borderRadius: '6px',
    backgroundColor: '#F5F0F0',
    width: '100%',
    padding: 0,
    overflow: 'auto'
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
    left: '90%',
    top: '15%',
  },
  footer: {
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

  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState();

  const getData = async () => {

    const { rows } = await showTodos();
    Promise.resolve(rows)
      .then((value) => {
        let data = value.map((task) => {
          return task.doc
        })
        setTasks(data)
      }, (error) => {
        throw error
      })
  }

  const TimeOnWork = async () => {

    const ArrayWhitAllTimes = tasks.map(task => {
      return task.status === 'done' && !isNaN(task.allTime) ? task.allTime : 0
    })
    console.log('all', ArrayWhitAllTimes)

    if (ArrayWhitAllTimes.length === 0) return 0

    const allTimeWaisting = ArrayWhitAllTimes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })
    console.log('asd', allTimeWaisting)
    setTime(allTimeWaisting);
  }


  useEffect(() => {
    getData();
    TimeOnWork();
  }, [])

  console.log(time)

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="h2" className={classes.title} >
        <FontAwesomeIcon icon={faTasks} /> TO DO LIST
      </Typography>
      <Container className={classes.mainBox}>
        <Tasks className={classes.navbar} ></Tasks>
        <Container className={classes.addButton} >
          <Fab variant="round" aria-label="add" color="secondary" ><CreateTask></CreateTask></Fab>
        </Container>
        <Routes />
      </Container>
      <Container className={classes.container} >
        <Typography variant="h3" component="h2" className={classes.footer} >
          <FontAwesomeIcon icon={faClock} /> Tempo gasto: {time}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
