import React from 'react';
import Title from './Components/Title';
import ListVote from './Components/VotePage/ListVote';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {getLatestQuestion} from './actions';


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

function VotePage(props) {

    React.useEffect(() => {
        props.getLatestQuestion();
    }, [])

    const classes = useStyles();
    console.log("p", props.question);
    return (
        <div>
            <Title value = {props.question}/>
            <ListVote options = {props.option} />
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
    getLatestQuestion
})(VotePage);