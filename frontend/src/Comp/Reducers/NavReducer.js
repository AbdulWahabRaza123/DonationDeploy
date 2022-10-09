export const NavState = false;
export const NavReducer = (state, action) => {
  if (action.type === "NAV") {
    return action.payload;
  }
  return state;
};
