import React from "react";
import "./banner.css";

import Button from "../button";

import { bannerImage, bubble, rating } from "../../assets/images";

function Banner() {
  return (
    <div className=" page__spacing banner__wrapper">
      <div className="banner__left_content">
        <h1>Improve Your Credit Score Live Better</h1>
        <p>
          Stop paying high fees on a mortgage, car financing or credit cards.
          See how much you can save today.
        </p>
        <Button
          className={"banner__wrapper_button"}
          label={"Get a Free Credit Audit"}
        />
      </div>
      <div className="banner__right_content">
        <div className="banner__right_wrapper">
          <img alt="banner img" className="banner__img" src={bannerImage} />
          <img alt="bubble" className="banner__bubble" src={bubble} />
          <img alt="rating" className="banner__rating" src={rating} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
