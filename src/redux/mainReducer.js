const initialState = {
  username: "Admin",
  password: "12345",
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
