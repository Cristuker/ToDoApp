import React from 'react';
import { showTodos } from '../../services/pouhdb';

// import { Container } from './styles';

export default function todo() {
  return (
    <div>
        todo
    </div>
  );
}

// {tasks.map((myTasks, i) => {
//     if ((index === 0 && children === "ToDo" && myTasks.status === "pending") || (index === 1 && children === "Done" && myTasks.status === "done")) {
//       return (
//         <ListItem className={classes.task} key={myTasks}>
//           <p className={classes.taskTitle}>{myTasks.title}</p>
//           <Modal task={myTasks} ></Modal>
//           <span className={classes.taskTime}>{myTasks.time}</span>
//         </ListItem>)
//     }
//   })}

// const getData = async () => {
//     const { rows } = await showTodos();

//     Promise.resolve(rows)
//       .then((value) => {
//         console.log('value', value)
//         setTasks(value.map((task) => {
//           return task.doc
//         }))
//       }, (error) => {
//         throw error
//       })

//   }
//   useEffect(() => {
//     getData();
//   }, [])
