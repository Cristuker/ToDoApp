import React, { useState } from 'react';
import { Tab, Tabs, Paper } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';


const Tasks = () => {

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