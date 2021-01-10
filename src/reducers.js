import {combineReducers} from 'redux';

const INITIAL_STATE = {
    options:[],
    question: ""
};

let newOptions;

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
            return{
                ...oldState,
                question: action.payload.name
            }
        case "RESET_STATE":
            return {
                options: [],
                question: ""
            }
        case "GET_LATEST_QUESTION":
            console.log("reducer", action.payload.answers)
            return {
                options: [...action.payload.answers],
                question: action.payload.label
            }
        case "DELETE_ANSWER":
            newOptions = [...oldState.options];
            newOptions = newOptions.filter(option => option.id !== action.payload.id);
            return{
                ...oldState,
                options: [...newOptions]
            }
        default:
            return oldState;
    }
}

export default combineReducers({
    options: optionReducer,
});