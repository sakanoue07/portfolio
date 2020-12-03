import React from 'react'
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Bar from './Bar';
import {motion} from 'framer-motion';

const langs = [
    {
        icon: 'https://cdn.svgporn.com/logos/javascript.svg',
        title: 'Javascript',
        level: '60'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/python.svg',
        title: 'Python',
        level: '50'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/html-5.svg',
        title: 'HTML',
        level: '70'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/css-3.svg',
        title: 'CSS',
        level: '65'
    }
]

const framework = [
    {
        icon: 'https://cdn.svgporn.com/logos/react.svg',
        title: 'React',
        level: '65'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/material-ui.svg',
        title: 'Material UI',
        level: '70'
    },
    {
        icon: 'https://cdn.svgporn.com/logos/vue.svg',
        title: 'Vue.js',
        level: '45'
    }
]


const useStyles = makeStyles((theme) => ({
    resume: {
        padding: '20px',
        height: '70vh'
    },
    resume_card_body: {


    },
    resume_container: {
        marginBottom: '100px'
    },
    resume_card_details: {
        marginLeft: '10px',
        fontSize: '0.9rem',
    },
    resume_card_heading: {
        marginLeft: '10px',
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#354538'
    },
    resume_card_name: {
        marginLeft: '10px',
        fontWeight: '200'
    },
    resume_card_title: {
        marginLeft: '10px',
        fontWeight: '200'
    },
    resume_lang_body: {
        margin: '10px'
    },
    resume_lang_heading: {
        marginLeft: '10px',
        fontSize: '1.8rem',
        fontWeight: '700px',
        color: '#354538'
    }
}))
function Resume() {
    const classes = useStyles();
    const resume_variants = { 
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
        <motion.div className={classes.resume}
            variants={resume_variants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Grid container className={classes.resume_container} >
            <Grid item xs={12} lg={6} md={6} sm={6} className={classes.resume_card}>
                <div className={classes.resume_card_heading}>
                    経歴
                </div>
                <div className={classes.resume_card_body}>
                    <div className={classes.resume_card_name}>氏名：栄木 悠也</div>
                    <div className={classes.resume_card_title}>大学名：立命館大学 情報理工学部</div>
                    <div className={classes.resume_card_title}>学年：３回生</div>

                    {/* <p className={classes.resume_card_details}>情報理工学部</p> */}
                </div>
            </Grid>

            <Grid item xs={12} lg={6} md={6} sm={6} className={classes.resume_card}>
                <div className={classes.resume_card_heading}>
                    経験
                </div>
                <div className={classes.resume_card_body}>
                    <p className={classes.resume_card_details}>大学入学後C言語,Pythonを学習。現在はReactを用いてのアプリ開発を学習中</p>
                </div>
            </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={12} lg={6} md={6} sm={12} className={classes.resume_lang}>
                    <h5 className={classes.resume_lang_heading}>
                        Language
                    </h5>
                    <div className={classes.resume_lang_body} >
                        {
                            langs.map(lang => 
                                <Bar value={lang} />
                            )
                        }
                    </div>
                </Grid>
                <Grid item  xs={12} lg={6} md={6} sm={12} className={classes.resume_lang}>
                    <h5 className={classes.resume_lang_heading}>
                        Framework
                    </h5>
                    <div className={classes.resume_lang_body} >
                        {
                            framework.map(fram => 
                                <Bar value={fram} />
                            )
                        }
                    </div>
                </Grid>

            </Grid>

        </motion.div>
    )
}

export default Resume
