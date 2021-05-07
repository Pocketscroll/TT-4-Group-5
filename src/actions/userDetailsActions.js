export function updateUserDetails(userDetailsObj) {
    return {
      type: "UPDATE_USER_DETAILS",
      payload: userDetailsObj,
    };
}
