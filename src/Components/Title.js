import React from 'react'

export default function Title(props) {
    return (
        <div className = "text-5xl text-black text-center font-bold">
            {props.value}
        </div>
    )
}
