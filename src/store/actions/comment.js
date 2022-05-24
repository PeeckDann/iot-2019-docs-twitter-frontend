import { BASE_URL, HEADERS } from "../../constants/store";

export const createComment = ({ commentText, tweetId }) => {
  return async () => {
    try {
      const response = await fetch(`${BASE_URL}/tweets/${tweetId}/comments`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ commentText }),
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
