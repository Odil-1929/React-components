
const initialState = {
    number: 0
};

export const counterReducer = (state = initialState, action) => {

    if (action.type == "incrementNumber"){
        return {
            number: state.number + 1
        }
    } else if (action.type == "decrementNumber"){
        return {
            number: state.number - 1
        }
    }
    return state;
}