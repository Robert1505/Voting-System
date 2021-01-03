import React from 'react';

export default function ListOption(props) {

    const shorten = (option) => {
        let length = option.length;
        if(length > 30)
            option = option.substring(0,30) + "...";
        return option;
    }

    return (
        <div className = "text-center mt-32 font-bold">
            {
                props.options.map((option, idx) => {
                    return <div className = "text-3xl mb-4 capitalize" key = {`option-${idx}`}> 
                                {shorten(option.name)}
                            </div>
                })
            }
        </div>
    )
}
