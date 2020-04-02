import React from 'react';
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  Typography,
  makeStyles,
  Fab,
} from '@material-ui/core';
import Tasks from './Components/Navbar/index';
import CreateTask from './Components/createTask/index';
import Routes from './routes';
import WorkTime from './Components/WorkTime/index';
import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  mainBox: {
    marginTop: '30px',
    border: '2px solid black',
    height: '40em',
    borderRadius: '6px',
    backgroundColor: '#F5F0F0',
    width: '100%',
    padding: 0,
    overflow: 'auto',
    webkitBoxShadow: ' -6px 6px 2px -2px rgba(0,0,0,0.75)',
    mozBoxShadow: ' -6px 6px 2px -2px rgba(0,0,0,0.75)',
    boxShadow: '-6px 6px 2px -2px rgba(0,0,0,0.75)',
  },
  title: {
    position: 'relative',
    textAlign: 'center',
    borderRadius: '6px',
  },
  container: {
    minWidth: '100%',
    borderRadius: '6px',
    backgroundColor: '#F5F0F0',
    border: '2px solid black',
    marginTop: '40px',
    minHeight: '5em',
    webkitBoxShadow: ' -6px 6px 2px -2px rgba(0,0,0,0.75)',
    mozBoxShadow: ' -6px 6px 2px -2px rgba(0,0,0,0.75)',
    boxShadow: '-6px 6px 2px -2px rgba(0,0,0,0.75)',
  },
  addButton: {
    margin: theme.spacing(1),
    textAlignLast: 'right',
    paddingRight: '0rem',
  },
  containerTitle: {
    position: 'relative',
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Noto Sans JP', sans-serif", 'Arial'],
  },
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
});

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ThemeProvider theme={theme}>
        <Container >
          <Container className={classes.containerTitle}>
            <Typography variant="h1" component="h2" className={classes.title}>
              <span role="img" aria-label="book of tasks">
                {' '}
                📝
              </span>{' '}
              TO DO LIST
            </Typography>
          </Container>
          <Container className={classes.addButton}>
            <Fab variant="round" size="medium" color="secondary">
              <CreateTask></CreateTask>
            </Fab>
          </Container>
        </Container>
        <Container className={classes.mainBox}>
          <Tasks className={classes.navbar}></Tasks>
          <Routes />
        </Container>
        <Container className={classes.container}>
          <WorkTime />
        </Container>
      </ThemeProvider>
    </Container>
  );
};

export default App;
