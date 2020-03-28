import React, { useState, useEffect } from 'react';
import { Typography, Tab, Tabs, AppBar, makeStyles, useTheme, List, ListItem, ListSubheader } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import { showTodos } from '../../services/pouhdb';




const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
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
}))

const TabPanel = (props) => {

  const { children, value, index, list, ...other } = props;
  const [tasks, setTasks] = useState([]);
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

  return (

      <List >
        {tasks.map((myTasks, i) => {
          if ((index === 0 && children === "ToDo" && myTasks.status === "pending") || (index === 1 && children === "Done" && myTasks.status === "done")) {
            return (
              <ListItem className={classes.task} key={myTasks}>
                <p className={classes.taskTitle}>{myTasks.title}</p>
                <Modal task={myTasks} ></Modal>
                <span className={classes.taskTime}>{myTasks.time}</span>
              </ListItem>)
          }
        })}
      </List>

  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Tasks = ({ tasks }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab list="todo" label="To Do" {...a11yProps(0)} />
          <Tab list="done" label="Done" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          ToDo
          </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Done
          </TabPanel>
      </SwipeableViews>
    </div>
  )
}

export default Tasks;