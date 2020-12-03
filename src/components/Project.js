import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import data_projects from './data/project_data';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import{motion} from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    project: {
        height: '70vh',
        paddingTop: '30px',
        overflowY: 'auto'
    },
    project_navbar: {
        marginTop: '50px',
        display: 'flex',
        width: '100%',
        height: '50px',
        '& > div': {
            margin: '0 5px',
            fontSize: '1rem',
            cursor: 'pointer'
        }
    }
}))
function Project() {
    const classes = useStyles();
    const [projects, setProjects] = useState(data_projects)
    const handleFillterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array);
    }

    const project_variants = { 
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div
            variants={project_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className={classes.project_navbar}>
                <div onClick={() => setProjects(data_projects)} >All</div>
                <div onClick={() => handleFillterCategory('react.js')}>React</div>
                <div onClick={() => handleFillterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFillterCategory('firebase')}>Firebase</div>
                <div onClick={() => handleFillterCategory('node')}>Node</div>
            </div>
            <Grid container  className={classes.project}>
                {
                    projects.map(project => 
                        <ProjectCard key={project.name} project={project} />
                        )
                }
                
            </Grid>
        </motion.div>
    )
}

export default Project
