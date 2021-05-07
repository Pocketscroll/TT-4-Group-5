
const initialState = {
    accountKey: "id12345",
    firstName: "david",
    lastName: "chua",
    nric: "s9724647e",
    address: "northoaks",
    phoneNumber: "93919090",
    email: "chua_mr@hotmail.com"
};

const userDetailsReducer = (state=initialState, action) => {

    switch (action.type) {
        case "UPDATE_USER_DETAILS":
            return action.payload;
        default:
            return state;
        }
}  

export default userDetailsReducer;


