import React,{ useEffect, useState } from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
import { showTodos } from '../../services/pouhdb';
import Modal from '../../Components/modal/index';
import StartButton from '../../Components/ButtonStart/index';

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

  const [tasks, setTasks ] = useState([]);

  const classes = useStyles();

  const getData = async () => {
    const { rows } = await showTodos();
    Promise.resolve(rows)
      .then((value) => {
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


  return (<>
    {tasks.map((myTasks, i) => {
      if (myTasks.status === "pending" || myTasks.status === 'doing'){
        return (
          <ListItem className={classes.task} key={myTasks}>
            <p className={classes.taskTitle}>{myTasks.title}</p>
            <span>{myTasks.status === 'doing' ? 'In progress...':'' }</span>
            <StartButton myTasks={myTasks} />
            <Modal task={myTasks} ></Modal>
          </ListItem>)
      }
    })}
  </>
  )
}

export default Todo;