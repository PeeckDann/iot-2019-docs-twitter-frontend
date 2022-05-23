import React, { useEffect } from "react";
import "../styles/Main.css";
import { useSelector, useDispatch } from "react-redux";
import * as tweetActions from "../store/actions/tweet";
import Tweet from "../components/Tweet";

const Main = () => {
  const tweets = useSelector((state) => state.tweet.tweets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tweetActions.getTweets());
  }, [dispatch]);

  return (
    <div id="container-main">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Main;
