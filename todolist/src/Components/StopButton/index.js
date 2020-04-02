import React from 'react';
import { makeStyles } from '@material-ui/core';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import moment from 'moment';
import { updateTask } from '../../services/pouhdb';

const useStyles = makeStyles({
  root: {
    marginRight: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
});

const StopButton = (props) => {
  const classes = useStyles();

  const { myTasks, getTime } = props;

  const handlePause = () => {
    myTasks.status = 'pending';
    myTasks.lastTime = getTime();
    const now = moment(new Date());
    const past = moment(JSON.parse(myTasks.startTime));
    const duration = moment.duration(now.diff(past));
    myTasks.allTime = duration.asHours();
    updateTask(myTasks);
  };

  return (
    <div className={classes.root} onClick={handlePause}>
      <PauseCircleFilledIcon />
    </div>
  );
};

export default StopButton;
