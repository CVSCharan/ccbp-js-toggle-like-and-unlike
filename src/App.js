import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
  );
  const [button, setButton] = useState("");
  const [icon, setIcon] = useState("");
  const [imageCount, setImageCount] = useState(1);
  const [buttonCount, setButtonCount] = useState(1);
  const [iconCount, setIconCount] = useState(1);
  // const [iconStatus, setIconStatus] = useState(false);
  // const [buttonStatus, setButtonStatus] = useState(false);
  // const [imageStatus, setImageStatus] = useState(false);

  function onClickLikeButton() {
    if (imageCount === 1 && buttonCount === 1 && iconCount === 1) {
      setImageCount(0);
      setButtonCount(0);
      setIconCount(0);
      setIcon("unlike-icon");
      setButton("unlike-button");
      setImage(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
      );
    } else {
      setImageCount(1);
      setButtonCount(1);
      setIconCount(1);
      setImage(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
      );
      setIcon("like-icon");
      setButton("like-button");
    }
  }
  const renderButton = `${button} ml-2`;
  const renderIcon = `fa fa-thumbs-up ${icon}`;

  return (
    <div className="app">
      <img src={image} className="puppy-image" id="puppyImage" alt="img1" />
      <div className="d-flex flex-row justify-content-center mt-3">
        <i id="likeIcon" className={renderIcon} aria-hidden="true"></i>
        <button
          type="button"
          id="likeButton"
          className={renderButton}
          onClick={onClickLikeButton}
        >
          Like
        </button>
      </div>
    </div>
  );
}

export default App;
