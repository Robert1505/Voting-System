import React from 'react';

export default function Question(props) {
    console.log(props.question);
    return (
        <div className = "font-bold text-5xl text-center mt-56">
            {props.question}
        </div>
    )
}
