import React from 'react'
import {makeStyles} from '@material-ui/core';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import NavBar from './NavBar';
import { Route, Redirect, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '25px',
        height: '100%',
        boxShadow: '0 0 6px black',
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            margin: '80px 10px'
        }
    }
}))


function Main() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main
