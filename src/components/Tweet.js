import React, { useState } from "react";

import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import CommentSection from "./CommentSection";
import TweetOptions from "./TweetOptions";

import { useSelector, useDispatch } from "react-redux";
import * as likeActions from "../store/actions/like";
import * as tweetActions from "../store/actions/tweet";

const Tweet = ({ tweet }) => {
  const [showComment, setShowComment] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLike = (tweetId) => {
    dispatch(likeActions.likeTweet(tweetId));
    setTimeout(() => {
      dispatch(tweetActions.getTweets());
    }, 200);
  };

  const handleRetweet = (tweet) => {
    dispatch(tweetActions.retweet(tweet));
    setTimeout(() => {
      dispatch(tweetActions.getTweets());
    }, 200);
  };

  return (
    <>
      <div id="tweet-box">
        <div id="profile-tweet">
          <img
            src={`https://robohash.org/${user.avatar}`}
            alt="avatar"
            id="avatar"
          />
        </div>

        <div id="box-tweet">
          <div id="name-id">
            <span id="flex-tweet">
              <p id="tweet-name">{user?.username}</p>
              <p id="tweet-id">@{user?.tag}</p>
              <p id="tweet-date">
                {new Date(tweet?.createdAt).toISOString().slice(0, 10)}
              </p>
            </span>

            <TweetOptions tweetId={tweet.id} />
          </div>

          <div>
            <img src={`https://robohash.org/${tweet.media}`} alt="media" />
          </div>
          <div id="post-box">
            <p id="text-tweet">{tweet.tweetText}</p>
          </div>

          <div id="nav-bottom-post">
            <div id="box-comment-number">
              <span
                onClick={() => {
                  setShowComment((showComment) => !showComment);
                }}
                className="comment"
                id="nav-icon-box"
              >
                <FaRegComment />
              </span>
              <p id="comment-number">{tweet.comments.length}</p>
            </div>
            <div id="box-retweet-number">
              <span
                onClick={() => {
                  handleRetweet(tweet);
                }}
                className="retweet"
                id="nav-icon-box"
              >
                <AiOutlineRetweet />
              </span>
            </div>
            <div id="box-like-number">
              <span
                onClick={() => {
                  handleLike(tweet.id);
                }}
                className="like"
                id="nav-icon-box"
              >
                <AiOutlineHeart />
              </span>
              <span id="like-number">{tweet.likes.length}</span>
            </div>
            <span className="share" id="nav-icon-box">
              <FiShare />
            </span>
          </div>
        </div>
      </div>
      {showComment ? (
        <CommentSection comments={tweet.comments} tweetId={tweet.id} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Tweet;
