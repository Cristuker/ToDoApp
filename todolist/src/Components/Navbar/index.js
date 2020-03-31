import React, { useState } from 'react';
import { makeStyles, Tab, Tabs, Paper } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    right: 0,
    marginRight: 0,
    marginLeft: 0
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



const Tasks = () => {

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          onChange={handleChange}>
          <Tab label="To Do" href="/" icon={<ListIcon />} />
          <Tab label="Done" href="/done" icon={<DoneIcon />} />
        </Tabs>
      </Paper>
  );
}

export default Tasks;