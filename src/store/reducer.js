let initialState = {
    counter : 0
}
let reducer = (state = initialState, actions) => {
    if(actions.type === "INCREMENT_COUNTER"){
        return {
           counter: state.counter + 1
        }
    }
    if(actions.type === "DECREMENT_COUNTER"){
        return {
            counter: state.counter - 1
        }
    }
    if(actions.type === "5INCREMENT_COUNTER"){
        return {
            counter: state.counter + 5
        }
    }
    if(actions.type === "5DECREMENT_COUNTER"){
        return {
            counter: state.counter - actions.value
        }

    }
    return state;
}

export default reducer;