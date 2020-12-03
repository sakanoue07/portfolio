import React from 'react'
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bar: {
        width: '90%',
        backgroundColor: '#dbdddf',
        borderRadius: '20px',
        marginBottom: '12px'
    },
    bar_icon: {
        width: '25px',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '5px'
    },
    bar_name: {
        display: 'flex',
        alignItems: 'center',
    },
    bar_wrapper: {
        backgroundColor: '#CC9999',
        borderRadius: '20px',
        padding: '4px 14px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.9rem'
    }
}))
function Bar({value}) {
    const classes = useStyles();
    const bar_width = `${value.level}%`

    return (
        <div className={classes.bar}>
            <div className={classes.bar_wrapper} style={{'width': bar_width}}>
                <span className={classes.bar_name} >
                    <img src={value.icon} alt="icon" className={classes.bar_icon}/>{value.title}
                </span>
                
            </div>
            
        </div>
    )
}

export default Bar
