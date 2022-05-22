export const GET_TWEETS = "GET_TWEETS";

const BASE_URL = "http://localhost:5000";
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
};

export const getTweets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/tweets`, {
        method: "GET",
        headers: HEADERS,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }

      const persistedState = await response.json();
      console.log(persistedState);

      dispatch({
        type: GET_TWEETS,
        persistedState: persistedState,
      });
    } catch (err) {
      alert(err);
    }
  };
};
