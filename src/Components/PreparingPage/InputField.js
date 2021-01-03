import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {addOption, addQuestion} from '../../actions';
import {v4 as uuidv4} from 'uuid';

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
        },
    },
    button: {
        background: 'linear-gradient(45deg, #616161 30%, #bdbdbd 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgb(203,203,203))',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    textField: {
        border: '1px solid #e2e2e1',
        borderRadius: 4,
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&$focused': {
            backgroundColor: 'transparent',
            borderColor: theme.palette.text.primary,
        },
    },
    focused: {},
}));

function InputField(props) {

    const classes = useStyles();
    const [option, setOption] = useState("");
    const [question, setQuestion] = useState("");

    return (
        <div className = "flex z-50">
            <div className = "flex-1 text-center">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField onChange={e => setQuestion(e.target.value)} value = {question} borderColor="primary.main" id="custom-css-outlined-input" className = {classes.textfield} label="What do you want to ask?" variant="outlined" />
                </form>
            </div>
            <div className = "flex-1 text-center mt-4">
                <Button onClick = {() => props.addQuestion(question, uuidv4())} className={classes.button}>Add question</Button>
            </div>
            <div className = "flex-1 text-center">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField onChange={e => setOption(e.target.value)} value = {option} borderColor="primary.main" className = {classes.textfield} id="outlined-basic" label="Add an option" variant="outlined" />
                </form>
            </div>
            <div className = "flex-1 text-center mt-4">
                <Button onClick = {() => props.addOption(option, uuidv4())} className={classes.button}>Add option</Button>
            </div>
        </div>
    )
}


export default connect(null,{
    addOption, addQuestion
})(InputField);