const initialState = {
    popular: [],
    current: [],
    searched: [],
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {
                ...state,
                popular: action.payload.popular,
                current: action.payload.current
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
            };
        default:
            return { ...state };
    }
}

export default movieReducer;