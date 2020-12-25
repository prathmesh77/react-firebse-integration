const INITIAL_STATE = {
    users:null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users:action.payload
            };
        default:
            return state;
    }
};

export default userReducer;