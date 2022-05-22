import { GET_TWEETS } from "../actions/tweet";

const initialState = {
  tweets: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return { tweets: action.persistedState };
    default:
      return state;
  }
};

export default userReducer;
