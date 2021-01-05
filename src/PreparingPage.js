import React, {useEffect} from 'react';
import InputField from './Components/PreparingPage/InputField';
import Title from './Components/Title';
import Question from './Components/PreparingPage/Question';
import ListOption from './Components/PreparingPage/ListOption';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getLatestQuestion, submitQuestion} from './actions';


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


function PreparingPage(props) {

    const classes = useStyles();

    

    return (
        <div>
            <Title value = "Voting System" />
            <InputField />
            <div className = "flex">
                <div className = "flex-1">
                    <Question question = {props.question} />
                </div>
                <div className = "flex-1">
                    <ListOption options = {props.options} />
                </div>
            </div>
            <div className = "text-center absolute inset-x-0 bottom-0 mb-8">
                <Button onClick = {() => submitQuestion(props.question, props.options)} className={classes.root}>Submit Question</Button>
                <div className = "mt-2">
                    <Link to = '/vote'>
                        <Button className={classes.root}>Vote</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        options: state.options.options,
        question: state.options.question
    }
}

export default connect(mapStateToProps,{
    getLatestQuestion, submitQuestion
})(PreparingPage);
