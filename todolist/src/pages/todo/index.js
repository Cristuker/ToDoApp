/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { ListItem, makeStyles, Container, Typography, createMuiTheme } from '@material-ui/core';
import { showTodos } from '../../services/pouhdb';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '../../Components/UpdateTask/index';
import StartButton from '../../Components/StartButton/index';
import StopButton from '../../Components/StopButton/index';
import DoneButton from '../../Components/DoneButtom/index';
import 'typeface-roboto';

const useStyles = makeStyles({
  taskTitle: {
    textAlign: 'left',
    width: '100%'
  },
  task: {
    alignItems: 'center',
    borderBottom: '2px solid black'
  },
  icon: {
    top: '10rem',
    textAlign: '-webkit-center',
    marginTop: '13rem'
  }
})

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Noto Sans JP', sans-serif", 'Arial'],
  },
});


const Todo = () => {

  const [tasks, setTasks] = useState([]);
  const classes = useStyles();


  const getData = async () => {
    const { rows } = await showTodos();
    Promise.resolve(rows)
      .then((value) => {
        const data = value.map((task) => {
          if(task.doc.status === 'doing' || task.doc.status === 'pending'){
            return task.doc
          }else{
            ''
          } 
          
        })
        setTasks(data)
      }, (error) => {
        throw error
      })
  }
  useEffect(() => {
    getData();
  }, [])
  
  if (tasks.length) {
    return (<>
      {tasks.map((myTasks, i) => {
        console.log('tas',tasks)
        if (myTasks.status === "pending" || myTasks.status === 'doing') {
          return (
            <ListItem className={classes.task} key={myTasks}>
              <p className={classes.taskTitle}>{myTasks.title}</p>
              <span>{myTasks.status === 'doing' ? 'In progress...' : ''}</span>
              <DoneButton myTasks={myTasks} />
                {myTasks.status === 'doing' ? <StopButton myTasks={myTasks} /> : <StartButton myTasks={myTasks} />}
              <Modal task={myTasks} ></Modal>
            </ListItem>)
        }
      })}
    </>
    )
  } else {
    return (
      <Typography>
        <Container className={classes.icon}>
          <AddCircleIcon fontSize="large" />
          <h1>Adicione uma tarefa</h1>
        </Container>
      </Typography>
    )
  }
}

export default Todo;