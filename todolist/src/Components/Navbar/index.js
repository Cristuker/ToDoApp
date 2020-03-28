import React from 'react';
import { Container, makeStyles,BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import DoneIcon from '@material-ui/icons/Done';




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    right:0,
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
  const [value, setValue] = React.useState(0);
  return(
  <Container>
    <BottomNavigation      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}showLabels className={classes.root}>
      <BottomNavigationAction href="/" label="To Do" icon={<ListIcon />} />
      <BottomNavigationAction href="/done" label="Done" icon={<DoneIcon />} />
    </BottomNavigation>
  </Container>
  )
}

export default Tasks;