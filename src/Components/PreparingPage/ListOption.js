import React, {useState} from 'react';
import {deleteAnswer} from '../../actions';
import {connect} from 'react-redux';

function ListOption({options, id, deleteAnswer}) {

    const [show, setShow] = useState(false);

    const shorten = (option) => {
        let length = option.length;
        if(length > 30)
            option = option.substring(0,30) + "...";
        return option;
    };


    return (
        <div className = "text-center mt-32 font-bold">
            {
                options.map((option, idx) => {
                    return  <div onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}} className = "flex flex-col list-option">
                                <div className = "text-3xl capitalize" key = {`option-${idx}`}> 
                                    {shorten(option.name)}
                                </div>
                                <div className = "flex justify-around">
                                    <button className = "delete-button" onClick = {() => deleteAnswer(id)}>Delete</button>
                                </div>   
                            </div> 
                })
            }
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
    deleteAnswer
})(ListOption);
