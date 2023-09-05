const Reducer = (state, action) => {
    
    if (action.type === 'ADD_INPUT') {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        };
    }
    return state;
}

export default Reducer;
