import React from "react";
import Popup from "reactjs-popup";
import { CgMoreAlt } from "react-icons/cg";
import "../styles/TweetOptions.css";

import CreateOrEditTweetPopup from "./CreateOrEditTweetPopup";

import { useDispatch } from "react-redux";
import * as tweetActions from "../store/actions/tweet";

const TweetOptions = ({ tweetId }) => {
  const dispatch = useDispatch();

  const handleDeleteTweet = () => {
    dispatch(tweetActions.deleteTweet(tweetId));
    setTimeout(() => {
      dispatch(tweetActions.getTweets());
    }, 200);
  };

  return (
    <Popup
      trigger={
        <span id="span-more">
          <CgMoreAlt />
        </span>
      }
      modal
      nested
    >
      {(close) => (
        <div className="options-container">
          <button className="close" onClick={close}>
            &times;
          </button>

          <CreateOrEditTweetPopup
            tweetId={tweetId}
            trigger={<button className="edit-tweet">Edit Tweet</button>}
          />
          <button
            className="delete-tweet"
            onClick={() => {
              handleDeleteTweet();
              close();
            }}
          >
            Delete Tweet
          </button>
        </div>
      )}
    </Popup>
  );
};

export default TweetOptions;
