import React from 'react';
import Timer from 'react-compound-timer';
import { makeStyles, Container } from '@material-ui/core';
import StartButton from '../StartButton/index';
import StopButton from '../StopButton/index';
import DoneButton from '../DoneButtom/index';

const useStyles = makeStyles({
  hidden: {
    display: 'contents',
  },
  inlineContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '9rem',
    placeItems: 'center',
  },
});

const Time = (props) => {
  const classes = useStyles();
  const { myTasks } = props;
  let timeInitial = 1;

  if (myTasks.lastTime) {
    timeInitial = myTasks.lastTime;
  }

  return (
    <Timer initialTime={parseInt(timeInitial)} startImmediately={false}>
      {({ start, resume, pause, stop, reset, timerState, getTime }) => (
        <Container className={classes.inlineContent}>
          {console.log('state', getTime())}
          <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
          {myTasks.status === 'doing' ? (
            <button className={classes.hidden} onClick={pause}>
              <StopButton onClick={pause} getTime={getTime} myTasks={myTasks} />
            </button>
          ) : (
            <button className={classes.hidden} onClick={start}>
              <StartButton onClick={start} myTasks={myTasks} />
            </button>
          )}
          <DoneButton myTasks={myTasks} onClick={stop}>
            Stop
          </DoneButton>
        </Container>
      )}
    </Timer>
  );
};

export default Time;
