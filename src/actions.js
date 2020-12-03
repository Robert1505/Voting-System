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