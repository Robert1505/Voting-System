import React from 'react';



export default function Question(props) {

    return (
        <div className = "font-bold text-5xl text-center mt-56">
            {
                props.question.map((question, idx) => {
                    return <div key = {`item-list-${idx}`}>{question.name}</div>
                })
            }
        </div>
    )
}
