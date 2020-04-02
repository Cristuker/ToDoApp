import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Paper } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';

const Tasks = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.location.pathname === '/done' ? setValue(1) : setValue(0);
  }, []);

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="black"
        centered
        flexContainer
      >
        <Tab label="To Do" href="/" icon={<ListIcon />} />
        <Tab label="Done" href="/done" icon={<DoneIcon />} />
      </Tabs>
    </Paper>
  );
};

export default Tasks;
