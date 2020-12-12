import React from "react";
import "./TitleSection.css";
import { Button } from "./Button.js";
import Navbar from "./Navbar";

function TitleSection() {
  return (
    <>
      <div className="title-container">
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
        <h1>ADVENTURE AWAITS</h1>
        <p> What are you waiting for?</p>
        <div className="title-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </>
  );
}

export default TitleSection;
