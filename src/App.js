import React from 'react';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SideBar from './components/SideBar';
import Main from './components/Main';
import {AnimatePresence} from 'framer-motion'
const useStyles = makeStyles((theme) => ({ 
    app: {
        margin: '0 auto',
        maxWidth: '960px',
        height: '90vh',
        padding: '40px 0',
    },
    app_main: {
        
    }
}));


function App () {
    const classes = useStyles();
    return(
        <AnimatePresence exitBeforeEnter>
            <Grid container className={classes.app}>
                <Grid item xs={12} lg={3} md={3} sm={12} ><SideBar /></Grid>
                <Grid className={classes.app_main}item xs={12} lg={9} md={9} sm={12} ><Main /></Grid>
            </Grid>
        </AnimatePresence>
    )
}

export default App;
