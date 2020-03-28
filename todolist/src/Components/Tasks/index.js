import React from 'react';
import { Typography, Tab, Tabs, AppBar, makeStyles, useTheme, List, ListItem } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  taskTitle: {
    textAlign: 'left',
    color: 'blue',
    width: '100%'
  },
  taskTime: {
    textAlign: 'right',
  },
  task: {
    height: '2em',
    alignItems: 'center'
  }
}))

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  const classes = useStyles();

  let tasks = [{
    title: 'Its a task',
    time: 10,
    description: 'Its a real task and i done'
  },
  {
    title: 'its no a task',
    time: 20,
    description: 'I dont know'
  },
  {
    title: 'React boys',
    time: 90,
    description: 'reacting...'
  },
  {
    title: 'its nk',
    time: 240,
    description: 'I ow'
  },  {
    title: 'task',
    time: 240,
    description: 'Iow'
  },  {
    title: 'itsk',
    time: 320,
    description: 'I dont know'
  },  {
    title: 'task',
    time: 210,
    description: 'I know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  },
  {
    title: 'its no a task',
    time: 560,
    description: 'I dont know'
  }]

  return (
    <Typography component="div" role="tabpanel" id={`full-width-tab-panel-${index}`} aria-labelledby={`full-width-tab-${index}`}
      {...other} >

      <List>
        {tasks.map((task, index) => {
          console.log(task.title)
          return(
          <ListItem>
            <p className={classes.taskTitle}>{task.title}</p>
            <span className={classes.taskTime}>{task.time}</span>
          </ListItem>)
        })}


      </List>
    </Typography>
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


const Tasks = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

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
          <Tab label="To Do" {...a11yProps(0)} />
          <Tab label="Done" {...a11yProps(1)} />
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