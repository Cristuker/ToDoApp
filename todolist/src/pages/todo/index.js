import React, { useEffect, useState } from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
import { showTodos } from '../../services/pouhdb';
import Modal from '../../Components/UpdateTask/index';
import StartButton from '../../Components/StartButton/index';
import StopButton from '../../Components/StopButton/index';
import DoneButton from '../../Components/DoneButtom/index';

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
  }
})



const Todo = () => {

  const [tasks, setTasks] = useState([]);
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

  return (<>
    {tasks.map((myTasks, i) => {// eslint-disable-next-line
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
}

export default Todo;