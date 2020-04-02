import React from 'react';
import { makeStyles } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import moment from 'moment';
import { updateTask } from '../../services/pouhdb';

const useStyles = makeStyles({
  root: {
    marginRight: '10px',
    cursor: 'pointer',
  },
});

const DoneButton = (props) => {
  const classes = useStyles();

  const { myTasks } = props;

  const handleDone = () => {
    myTasks.status = 'done';
    const now = moment(new Date());
    const past = moment(JSON.parse(myTasks.startTime));
    const duration = moment.duration(now.diff(past));
    myTasks.allTime = duration.asHours();
    updateTask(myTasks);
    document.location.reload(true);
  };

  return (
    <div className={classes.root} onClick={handleDone}>
      <CheckCircleIcon />
    </div>
  );
};

export default DoneButton;
