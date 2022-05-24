import React, { useState } from "react";
import "../styles/CommentSection.css";
import { useDispatch } from "react-redux";
import * as commentActions from "../store/actions/comment";
import * as tweetActions from "../store/actions/tweet";

const CommentSection = ({ comments, tweetId }) => {
  const [text, updateText] = useState("");

  const dispatch = useDispatch();

  const handleCreateComment = () => {
    dispatch(commentActions.createComment({ commentText: text, tweetId }));
    setTimeout(() => {
      dispatch(tweetActions.getTweets());
    }, 200);
  };

  return (
    <div className="comments-box">
      {comments.map((comment) => (
        <div className="comment-text" key={comment.id}>
          <p>{comment.commentText}</p>
        </div>
      ))}
      <div className="comment-form-container">
        <form className="comment-form">
          <input
            className="comment-input"
            type="name"
            value={text}
            onChange={(evt) => updateText(evt.target.value)}
            placeholder="Text..."
          />
        </form>
        <button
          onClick={() => handleCreateComment()}
          className="comment-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
