import React from 'react'
import { makeStyles } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { updateTask } from '../../services/pouhdb';
import Moment from 'moment';

const useStyles = makeStyles({
    root: {
        marginRight: '10px',
        cursor: 'pointer'
    }
})

const StartButton = (props) => {

    const classes = useStyles();

    const { myTasks } = props;
    const handleStart = () => {
        myTasks.status = 'doing'
        myTasks.startTime = JSON.stringify(Moment(new Date()))
        updateTask(myTasks);
        document.location.reload(true);
    }

    return (
        <div className={classes.root} onClick={handleStart} > 
            <PlayCircleFilledIcon />
        </div>
    )
}

export default StartButton;