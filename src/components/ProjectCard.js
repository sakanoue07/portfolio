import React from 'react'
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    projectCard_image: {
        width: '100%',
        height: '30%',
        objectFit: 'contain',
        borderRadius: '30px',
        border: '1px solid #CC9999',
        transition: 'transform 0.3s linear',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        [theme.breakpoints.down('sm')]: {
            height: '80%'
        }
    },
    projectCard_title: {
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectCard_wrapper: {
        margin: '10px 0',
        width: '100%',
        height: '300px',
        minHeight: '160px'
    },
    projectCard_icon: {
        width: '25px',
        height: '25px',
        paddingRight: '10px'
    }
}))
function ProjectCard({project}) {
    const classes = useStyles();

    return (
        <Grid item xs={11} xl={3} lg={3} md={3}  className={classes.projectCard}>
            <div className={classes.projectCard_wrapper}>
                <a href={project.deployed_url}>
                    <img src={project.image} alt={project.name} className={classes.projectCard_image} target="_blank"/> 
                </a>
                <div className={classes.projectCard_title}>
                    <a href={project.github_url}  rel="noreferrer" target="_blank">
                        <GitHubIcon className={classes.projectCard_icon}/>
                    </a>
                    {project.name}
                </div>
            </div>
        </Grid>
    )
}

export default ProjectCard
