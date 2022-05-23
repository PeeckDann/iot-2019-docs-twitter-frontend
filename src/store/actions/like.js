import { BASE_URL, HEADERS } from "../../constants/store";

export const likeTweet = (tweetId) => {
  return async () => {
    try {
      const response = await fetch(`${BASE_URL}/likes/${tweetId}`, {
        method: "POST",
        headers: HEADERS,
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
