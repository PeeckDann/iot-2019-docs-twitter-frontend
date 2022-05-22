import React, { useEffect } from "react";
import "../styles/NavBar.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHomeCircle,
  BiHash,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsBookLine } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../store/actions/user";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getCurrentUser());
  }, [dispatch]);

  return (
    <div id="container-nav">
      <div id="nav-up">
        <span id="twitter-box">
          <FaTwitter id="twitter-icon" />
        </span>
        <button id="row">
          <BiHomeCircle id="home-icon" />
          <p id="nav-title">Home</p>
        </button>

        <button id="row">
          <BiHash id="home-icon" />
          <p className="bold" id="nav-title">
            Explore
          </p>
        </button>

        <button id="row">
          <IoNotificationsOutline id="home-icon" />
          <p id="nav-title">Notifications</p>
        </button>

        <button id="row">
          <BiMessageSquareDetail id="home-icon" />
          <p id="nav-title">Messages</p>
        </button>

        <button id="row">
          <BiBookmark id="home-icon" />
          <p id="nav-title">Bookmarks</p>
        </button>

        <button id="row">
          <RiFileList2Line id="home-icon" />
          <p id="nav-title">Lists</p>
        </button>

        <button id="row">
          <RiContactsBookLine id="home-icon" />
          <p id="nav-title">Profile</p>
        </button>

        <button id="row">
          <CgMoreO id="home-icon" />
          <p id="nav-title">More</p>
        </button>

        <button id="tweet">Tweet</button>
      </div>

      <div id="bottom-nav">
        <span id="user-box">
          <img
            id="user"
            src={`https://robohash.org/${user?.avatar}`}
            alt="profile"
          />
          <span>
            <p id="name">{user?.username}</p>
            <p id="id">@{user?.tag}</p>
          </span>
        </span>

        <span>
          <CgMoreAlt id="more-bottom" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
