import React from "react";

import { CgMoreAlt } from "react-icons/cg";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";

const Tweet = ({ tweet }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div id="tweet-box">
      <div id="profile-tweet">
        <img src="https://robohash.org/amogus" alt="avatar" id="avatar" />
      </div>

      <div id="box-tweet">
        <div id="name-id">
          <span id="flex-tweet">
            <p id="tweet-name">{user?.username}</p>
            <p id="tweet-id">@{user?.tag}</p>
            <p id="tweet-date">{new Date(tweet?.createdAt).toISOString()}</p>
          </span>

          <span id="span-more">
            <CgMoreAlt />
          </span>
        </div>

        <div id="post-box">
          <p id="text-tweet">{tweet.tweetText}</p>
        </div>

        <div id="nav-bottom-post">
          <div id="box-comment-number">
            <span className="comment" id="nav-icon-box">
              <FaRegComment />
            </span>
            <p id="comment-tweet">{69}</p>
          </div>
          <span className="retweet" id="nav-icon-box">
            <AiOutlineRetweet />
          </span>
          <div id="box-like-number">
            <span className="like" id="nav-icon-box">
              <AiOutlineHeart />
            </span>
            <span id="like-number">{420}</span>
          </div>
          <span className="share" id="nav-icon-box">
            <FiShare />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
