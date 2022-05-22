export const GET_CURRENT_USER = "GET_CURRENT_USER";

const BASE_URL = "http://localhost:5000";
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/users/1`, {
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
        type: GET_CURRENT_USER,
        persistedState: persistedState,
      });
    } catch (err) {
      alert(err);
    }
  };
};
