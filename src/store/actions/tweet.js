import { BASE_URL, HEADERS } from "../../constants/store";

export const GET_TWEETS = "GET_TWEETS";

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

export const retweet = (tweet) => {
  return async () => {
    try {
      const response = await fetch(`${BASE_URL}/tweets`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          tweetId: tweet.id,
          tweetText: tweet.tweetText,
          media: tweet.media,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
    } catch (err) {
      alert(err);
    }
  };
};

export const createTweet = ({ tweetText, media }) => {
  return async () => {
    try {
      const response = await fetch(`${BASE_URL}/tweets`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({
          tweetText,
          media,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData);
      }
    } catch (err) {
      alert(err);
    }
  };
};
