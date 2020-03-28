import React from 'react';
import { Typography, Tab, Tabs, AppBar,makeStyles, useTheme, Box } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const TabPanel = (props) =>{
    const { children, value, index, ...other } = props;

    return(
        <Typography
        component="div"
        role="tabpanel"
        id={`full-width-tab-panel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
            {<Box p={3}>{children}</Box>}          
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
  
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  }));

const Navbar = () =>{
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

export default Navbar