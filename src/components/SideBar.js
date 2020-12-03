import React from 'react'
import {makeStyles} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import main_img from '../assets/img/main.JPG';
import {motion} from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '25px 15px',
        height: '100%',
        boxShadow: '0 0 6px black',
        margin: '10px',
        textAlign: 'center'
        
    },
    sidebar_image: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        boxShadow: '0 0 6px black',
        objectFit: 'contain'
    },
    sidebar_name: {
        fontFamily: 'Kaushan Script',
        margin: '20px 0',
        fontSize: '1.5rem',
        '& > span': {
            color: '#00f260'
        }
    },
    sidebar_title: {
        backgroundColor: '#f1f1f1',
        borderRadius: '30px'
    },
    sidebar_item: {
        margin: '10px 0',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
    },
    sidebar_icon: {
        width: '25px',
        height: '25px',
        margin: '0 5px'
    },
    sidebar_email: {
        fontSize: '0.9rem'
    },
    socialmedia: {
        paddingTop: '10px 0'
    },
    sidebar_contact: {
        backgroundColor: '#dbdddf',
        padding: '2px 0',
        borderRadius: '10px'
    },
    sidebar_button: {
        backgroundColor: '#CC9999',
        margin: '25px 25px 0px',
        color: '#fff',
        borderRadius: '30px',
        cursor: 'pointer',
        padding: '5px 0',
        transition: 'all 0.5s linear',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: '#6666FF'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '35px'
        }
    },
    github: {
        display: 'flex',
        '&:hover': {
            backgroundColor: '#f1f1f1',
            color: '#000',
            textDecoration: 'none'
        },
    }

    
    
}))

function SideBar() {
    const classes = useStyles();

    const handleEmail = () =>{
        window.open("mailto: yuuchin1999@gmail.com ")
    }

    const sidebar_variants = { 
        hidden: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }
    return (
        <motion.div className={classes.sidebar}
            variants={sidebar_variants}
            initial='hidden'
            animate='visible'
        >
            <img src={main_img} alt="avator"  className={classes.sidebar_image}/>
            <div className={classes.sidebar_name}>Sakaki<span> yu</span></div>
            <div className={classes.sidebar_item + " " + classes.sidebar_title} >Web Developer</div>
            <div className={classes.socialmedia}>
                <Link
                    href=""
                >
                    <InstagramIcon className={classes.sidebar_icon} />
                </Link>
                <Link
                    href=""
                >
                    <TwitterIcon className={classes.sidebar_icon} />
                </Link>
            </div>
            <div className={classes.sidebar_contact}>
                <Link 
                    rel="noopener noreferrer" 
                    href=""
                    target="_blank"
                    className={classes.sidebar_item + " " + classes.github}
                >                       
                    <GitHubIcon className={classes.sidebar_icon} />
                    <p>github</p>
                </Link>
                <div className={classes.sidebar_item}>
                    <PersonPinCircleIcon /> 
                    Jpan, Kyoto
                </div>
                <div className={classes.sidebar_item +" "+ classes.sidebar_email}>yuuchin1999@gmail.com</div>
            </div>
            <div className={ classes.sidebar_button} onClick={handleEmail}>
                email button
            </div>
        </motion.div>
    )
}

export default SideBar
