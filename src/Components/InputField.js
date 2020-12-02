import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { borders } from '@material-ui/system';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
    textfield: {
        '& > *': {
            fontWeight: 900,
            color: 'black',
            border: 1
        }
    },
    button: {
        background: 'linear-gradient(45deg, #616161 30%, #bdbdbd 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(203,203,203))',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));

export default function InputField() {

    const classes = useStyles();

    return (
        <div className = "flex z-50">
            <div className = "flex-1 text-center">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField borderColor="primary.main" className = {classes.textfield} id="outlined-basic" label="What do you want to ask?" variant="outlined" />
                </form>
            </div>
            <div className = "flex-1 text-center">
                <Button className={classes.button}>Add option</Button>
            </div>
        </div>
    )
}
