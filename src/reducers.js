import {combineReducers} from 'redux';

const INITIAL_STATE = {
    options:[],
    question: []
};

let newOptions;
let newQuestion;

export const optionReducer = (oldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_OPTION":
            newOptions = [...oldState.options];
            newOptions.push({
                name: action.payload.name,
                id: action.payload.id
            });
            return{
                ...oldState,
                options: [...newOptions]
            }
        case "ADD_QUESTION":
            newQuestion = [...oldState.question];
            newQuestion.push({
                name: action.payload.name
            });
            return{
                ...oldState,
                question: [...newQuestion]
            }
        default:
            return oldState;
    }
}

export default combineReducers({
    options: optionReducer,
    question: optionReducer
});