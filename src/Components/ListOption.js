import React from 'react';

export default function ListOption(props) {

    return (
        <div className = "text-center mt-32 font-bold">
            {
                props.option.map((option, idx) => {
                    return <div className = "text-3xl mb-4 capitalize" key = {`option-${idx}`}> 
                                {option.name}
                            </div>
                })
            }
        </div>
    )
}
