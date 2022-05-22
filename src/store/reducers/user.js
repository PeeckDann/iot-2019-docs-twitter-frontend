import { GET_CURRENT_USER } from "../actions/user";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { user: action.persistedState };
    default:
      return state;
  }
};

export default userReducer;
