import React, {useState} from 'react';
import {deleteAnswer} from '../../actions';
import {connect} from 'react-redux';

function ListOption(props) {

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
                props.options.map((option, idx) => {
                    return  <div onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}} className = "flex flex-col mb-4">
                                <div className = "text-3xl capitalize" key = {`option-${idx}`}> 
                                    {shorten(option.name)}
                                </div>
                                {
                                    show === true ? <div>
                                                        <button className = " px-2 bg-black text-white rounded hover:bg-grey-900 border-2 border-black" onClick = {() => deleteAnswer()}>Delete</button>
                                                    </div>  : ""
                                }  
                                
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
