import React from 'react';
import InputField from './Components/InputField';
import Title from './Components/Title';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #9e9e9e 30%, #616161 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(203,203,203)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});


export default function PreparingPage(props) {

    const classes = useStyles();

    return (
        <div>
            <Title value = "Voting System" />
            <InputField />
            <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
                <Link to = '\vote'>
                    <Button className={classes.root}>Vote</Button>
                </Link>
            </div>
        </div>
    )
}
