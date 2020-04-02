/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { ListItem, makeStyles, Container, Snackbar, Box, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { showTodos } from '../../services/pouhdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { updateTask } from '../../services/pouhdb';

const Alert = (props) => {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

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
    height: '10px'
  },
  icon: {
    top: '10rem',
    textAlign: '-webkit-center',
    marginTop: '13rem'
  }
})

const Done = () => {

  const [tasks, setTasks] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const classes = useStyles();

  const getData = async () => {
    const { rows } = await showTodos();
    Promise.resolve(rows)
      .then((value) => {
        const data = value.map((task) => {
          return task.doc
        })
        setTasks(data)
      }, (error) => {
        throw error
      })
  }
  useEffect(() => {
    getData();
  }, [])

  const handleReOpen = (task) => {
    console.log('task',task)
    task.status = 'pending';
    task.allTime = 0;
    delete task.startTime;
    updateTask(task)
    handleOpenSnackbar();
  }

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  if (tasks.length) {
  return (<>
    {tasks.map((myTasks) => {
      if (myTasks.status === "done") {
        return (
          <Box >
            <ListItem className={classes.task} key={myTasks}>
              <p  className={classes.taskTitle}>{myTasks.title}</p>
              <Container className={classes.reopen} onClick={() => handleReOpen(myTasks)} >
                <FontAwesomeIcon icon={faRedoAlt} />
              </Container>
            </ListItem>
            <Snackbar  key={`bottom,center`} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                  Tarefa reaberta com sucesso!
                </Alert>
            </Snackbar>
          </Box>
        )
      }
    })}
  </>
  )
}else{
  return (
    <Typography>
      <Container className={classes.icon}>
      <FontAwesomeIcon size="4x" icon={faFolderOpen} />
        <h1>Você ainda não terminou nenhuma tarefa...</h1>
      </Container>
    </Typography>
  )
}

}

export default Done;