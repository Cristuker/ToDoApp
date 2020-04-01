import React, { useEffect, useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { showTodos } from '../../services/pouhdb';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        marginTop: '10px'
    }
})




const WorkTime = () => {

    const classes = useStyles();
    const [time, setTime] = useState();

    const TimeOnWork = (tasks) => {
        const ArrayWhitAllTimes = tasks.map(task => {
            return task.status === 'done' && !isNaN(task.allTime) ? task.allTime : 0;
        })

        if (ArrayWhitAllTimes.length === 0) return 0;

        const allTimeWaisting = ArrayWhitAllTimes.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        })
        setTime(String(allTimeWaisting.toFixed(2)).replace('.',':'))
    }

    const getData = async () => {

        const { rows } = await showTodos();
        Promise.resolve(rows)
            .then((value) => {
                let data = value.map((task) => {
                    return task.doc
                })
                TimeOnWork(data);
            }, (error) => {
                throw error
            })
    }

    useEffect(() => {
        getData();
    }, [])




    return (
        <Typography variant="h3" component="h2" className={classes.root} >
            <FontAwesomeIcon icon={faClock} /> Tempo gasto: {time}
        </Typography>
    );
}

export default WorkTime;
