import axios from './axios';

export const addOption = (name, id) => {
    return {
        type: "ADD_OPTION",
        payload: {
            name,
            id
        }
    }
}

export const addQuestion = (name) => {
    return {
        type: "ADD_QUESTION",
        payload: {
            name
        }
    }
}

export const resetState = () => {
    return {
        type: "RESET_STATE",
    }
}

export const getLatestQuestion =  () => async dispatch => {
    
    const { data } = await axios.get("/latest");
    console.log("data from server", data);
    return dispatch({
        type: "GET_LATEST_QUESTION",
        payload: data
    });
}

export const addVote = async (answerId) => {
    await axios.post("/addVote", {
        answerId
    });
}

export const submitQuestion = async (label, answers) => {
    await axios.post("/submitQuestion", {
        label, answers
    })
} 

export const deleteAnswer = (id) => {
    return {
        type: "DELETE_ANSWER",
        payload: {
            id
        }
    }
}