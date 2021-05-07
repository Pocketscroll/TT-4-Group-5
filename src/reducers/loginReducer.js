
const initialState = false

const userDetailsReducer = (state=initialState, action) => {

    switch (action.type) {
        case "LOG_IN":
            return action.payload;
        default:
            return state;
        }
}  

export default userDetailsReducer;


