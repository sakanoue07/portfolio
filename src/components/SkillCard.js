import React from 'react'
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    skill_card: {
        backgroundColor: '#fff',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '10px',
        height: '130px'
    },
    skill_card_icon: {
        paddingLeft: '10px',
        paddingTop: '5px',
        width: '40px',
        height: '40px'
    },
    skill_card_body: {
        marginLeft: '15px'
    },
    skill_card_title: {
        fontSize: '1.25rem',
        padding: '10px 0 5px',
    },
    skill_card_about: {
        margin: '0px',
        fontSize: '0.9rem',
        color: '#354358'
    }
}))

function SkillCard({skill}) {
    const classes = useStyles();
    return (
        <div className={classes.skill_card}>
            <img src={skill.icon} alt="icon" className={classes.skill_card_icon} />
            <div className={classes.skill_card_body} >
                <h6 className={classes.skill_card_title}>{skill.title}</h6>
                <p className={classes.skill_card_about}> {skill.about} </p>
            </div>
        </div>
    )
}

export default SkillCard 
