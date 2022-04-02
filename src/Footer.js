import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="items">
        <div className="item1">
          <h4>BROWSE</h4>
          <li>Streaming Library</li>
          <li>Live TV</li>
          <li>Live News</li>
          <li>TV Shows</li>
        </div>

        <div className="item1">
          <h4>INTEREST</h4>
          <li>Movies</li>
          <li>Originals</li>
          <li>Networks</li>
          <li>Kids</li>
        </div>

        <div className="item1">
          <h4>HELP</h4>
          <li>Account & Billing</li>
          <li>Plans & Pricing</li>
          <li>Supported Device</li>
          <li>Accesibility</li>
        </div>

        <div className="item1">
          <h4>ABOUT</h4>
          <li>Press</li>
          <li>Jobs</li>
          <li>Contact</li>
          <li>T.O.S</li>
        </div>
      </div>
      <div className="socials">
        <div className="icons icon">
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="icons"></div>
        <div className="icons"></div>
      </div>
    </div>
  );
}

export default Footer;
