import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ReorderIcon from "@material-ui/icons/Reorder";

function Header() {
  // Menu-Icon
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="header">
      <div className="leftSide">
        {/* Icons */}
        <div className="header__icons" id={showLinks ? "hidden" : ""}>
          <div className="header__icon header__icon--active">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="header__icon">
            <FlashOnIcon />
            <p>Trending</p>
          </div>
          <div className="header__icon">
            <LiveTvIcon />
            <p>Verified</p>
          </div>
          <div className="header__icon">
            <VideoLibraryIcon />
            <p>Collections</p>
          </div>
          {/* <div className="header__icon">
            <SearchIcon />
            <p>Search</p>
          </div> */}
          <div className="header__icon">
            <PersonOutlineIcon />
            <p>Account</p>
          </div>
        </div>
      </div>
      <div className="Btn">
        <button onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
        alt=""
      />
    </div>
  );
}

export default Header;
