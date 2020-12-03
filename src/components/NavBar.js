import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
const useStyles = makeStyles((theme) => ({
    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    navbar_active: {
        fontSize: '2rem',
        fontWeight: '700',
        borderBottom: '4px solid #CC9999',
        color: '#354358'
    },
    navbar_items: {
        display: 'flex'
    },
    navbar_item: {
        color: '#354358',
        textDecoration: 'none',
        marginRight: '20px' ,
        fontSize: '1.3rem',
        cursor: 'pointer',
        '&:hover': {
            color: '#CC9999'
        }
    },
}))

function NavBar() {
    const classes = useStyles();
    const [active, setActive] = useState('');

    useEffect(() => {
        let currentURL = window.location.href;
        if(currentURL.endsWith('/'))
            setActive('About')
        else if(currentURL.endsWith('/project'))
            setActive('Project')
        else if(currentURL.endsWith('/resume'))
            setActive('Resume')
        
    },[active])

    const navbar_variants = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: '0vh',
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }
    return (
        <motion.div  className={classes.navbar}
            variants={navbar_variants}
            initial='hidden'
            animate='visible'
        >
            <div className={classes.navbar_active}>
                {active}
            </div>

            <div className={classes.navbar_items}>
            {active !== 'About' &&
                <Link to="/">
                    <div className={classes.navbar_item} onClick={() => setActive('About')} >About</div>
                </Link>
            }
            {active !== 'Project' &&
                <Link to="/project">
                    <div className={classes.navbar_item} onClick={() => setActive('Project')} >Project</div>
                </Link>
            }
            {active !== 'Resume' &&
                <Link to="/resume">
                    <div className={classes.navbar_item} onClick={() => setActive('Resume')} >Resume</div>
                </Link>
            }
            </div>
        </motion.div>
    )
}

export default NavBar
