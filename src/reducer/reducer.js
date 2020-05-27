const addState = {
    sideNav: false,
};

const reducer = (state = addState, action) => {

    if(action.type === "OPEN_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }

    if(action.type === "CLOSE_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }
    
    return state;
}

export default reducer;