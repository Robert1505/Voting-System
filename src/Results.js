import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Title from './Components/Title';
import {connect} from 'react-redux';
import {resetState} from './actions';
import Chart from './Components/Results/Chart';

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

function Results(props) {

    const classes = useStyles();

    return (
        <div>
            <Title value = "Results" />
            
            <div className = "mb-32">
                <Title value = {props.question} />
            </div>
            <Chart />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        option: state.options.options,
        question: state.options.question
    }
}

export default connect(mapStateToProps, {
    resetState
})(Results);


