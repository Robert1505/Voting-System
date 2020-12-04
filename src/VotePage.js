import React from 'react';
import Title from './Components/Title';
import InputField from './Components/InputField';

export default function VotePage(props) {
    return (
        <div>
            <Title value = {props.question} />
        </div>
    )
}
