import React, { useState } from "react";
import Popup from "reactjs-popup";
import "../styles/CreateOrEditTweetPopup.css";

import { useDispatch } from "react-redux";
import * as tweetActions from "../store/actions/tweet";

const CreateOrEditTweetPopup = ({ trigger, tweetId }) => {
  const [tweetText, updateTweetText] = useState("");
  const [media, updateMedia] = useState("");

  const dispatch = useDispatch();

  const handlePress = () => {
    if (!tweetId) {
      dispatch(tweetActions.createTweet({ tweetText, media }));
    } else {
      dispatch(tweetActions.editTweet({ tweetId, tweetText, media }));
    }

    setTimeout(() => {
      dispatch(tweetActions.getTweets());
    }, 200);
  };

  return (
    <Popup trigger={trigger} modal nested>
      {(close) => (
        <div className="container">
          <button className="close" onClick={close}>
            &times;
          </button>

          <form className="form">
            <input
              className="input text-input"
              type="name"
              value={tweetText}
              onChange={(evt) => updateTweetText(evt.target.value)}
              placeholder="Text..."
            />
            <input
              className="input"
              type="name"
              value={media}
              onChange={(evt) => updateMedia(evt.target.value)}
              placeholder="Media..."
            />
          </form>

          <button
            className="create-tweet"
            onClick={() => {
              handlePress();
              close();
            }}
          >
            {tweetId ? "Edit" : "Create"} Tweet
          </button>
        </div>
      )}
    </Popup>
  );
};

export default CreateOrEditTweetPopup;
