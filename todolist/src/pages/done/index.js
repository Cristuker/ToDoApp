import React, { useEffect, useState } from 'react';
import { ListItem, makeStyles, Container, Snackbar, Box } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { showTodos } from '../../services/pouhdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { updateTask } from '../../services/pouhdb';

const useStyles = makeStyles({
  taskTitle: {
    textAlign: 'left',
    width: '100%'
  },
  taskTime: {
    textAlign: 'right',
  },
  task: {
    alignItems: 'center',
    borderBottom: '2px solid black'
  },
  reopen: {
    cursor: 'pointer',
    width: '10px',
    height: '10px',
  }
})

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Done() {

  const [tasks, setTasks] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const classes = useStyles();

  const getData = async () => {
    const { rows } = await showTodos();
    Promise.resolve(rows)
      .then((value) => {
        console.log('value', value)
        setTasks(value.map((task) => {
          return task.doc
        }))
      }, (error) => {
        throw error
      })
  }
  useEffect(() => {
    getData();
  }, [])

  const handleReOpen = (task) => {
    updateTask(task)
    handleOpenSnackbar();
  }

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (<>
    {tasks.map((myTasks, i) => {
      if (myTasks.status === "done") {
        return (
          <Box>
            <ListItem className={classes.task} key={myTasks}>
              <p className={classes.taskTitle}>{myTasks.title}</p>
              <Container className={classes.reopen} onClick={() => handleReOpen(myTasks)} >
                <FontAwesomeIcon icon={faRedoAlt} />
              </Container>
            </ListItem>
            <Snackbar className={classes.warning} key={`bottom,center`} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                  Tarefa aberta com sucesso!
                </Alert>
            </Snackbar>
          </Box>
        )
      }
    })}
  </>
  )
}





