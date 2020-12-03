import React from 'react';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SkillCard from './SkillCard';
import {motion} from 'framer-motion';

const skills = [
    {
        icon: 'https://cdn.svgporn.com/logos/javascript.svg',
        title: 'Javascript',
        about: 'JavaScript is one of the programming languages.'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/react.svg',
        title: 'React',
        about: 'A JavaScript library for building user interfaces'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/python.svg',
        title: 'Python',
        about: 'Python is an interpreted high-level general-purpose programming language'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/html-5.svg',
        title: 'HTML',
        about: 'One of the markup languages ​​for writing hypertext.'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/css-3.svg',
        title: 'CSS',
        about: 'One of the specifications that dictates how to qualify HTML and XML elements '
    },
    {
        icon: 'https://cdn.svgporn.com/logos/material-ui.svg',
        title: 'Material UI',
        about: 'Build your own design system, or start with Material Design.'
    }
]

const useStyles = makeStyles((theme) => ({
    about: {
        padding: '20px',
    },
    about_intro: {
        padding: '20px',
        fontSize: '1.1rem'
    },
    about_container: {
        backgroundColor: '#dbdddf',
        padding: '20px',
        borderRadius: '10px'
    },
    about_heading: {
        fontSize: '25px',
        fontWeight: '700',
        color: '#354358'
    },
    about_row: {

    }
})) 
function About() {
    const classes = useStyles()

    const about_variants = { 
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
        <motion.div className={classes.about}
            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className={classes.about_intro}>
                I will introduce my skills.
            </h6>
            <div className={classes.about_container}>
                <h6 className={classes.about_heading}>
                    Skills
                </h6>
                <Grid container className={classes.about_row}>
                    {
                        skills.map(skill => 
                            <Grid item xs={12} lg={6} md={6} >
                                <SkillCard skill={skill} />
                            </Grid>
                            )
                    }
                </Grid>
            </div>
            
        </motion.div>
    )
}

export default About