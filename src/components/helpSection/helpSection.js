import React from "react";
import { mobile } from "../../assets/images";

import { HELP_SECTION_CONTENT } from "../../constants/constants";

import "./helpSection.css";

import Button from "../button";

function HelpSection() {
  return (
    <div className="page__spacing help__section_wrapper">
      <h1>Clearknox Helps You</h1>
      <div className="help__section_content">
        <div className="help__section_left">
          <img alt="mobile" src={mobile} />
        </div>
        <div className="help__section_right">
          {HELP_SECTION_CONTENT.map((content, index) => (
            <div key={index} className="help__section_content-wrapper">
              <p className={`${content.key} help__section_content_title`}>{`${
                index + 1
              }. ${content.title}`}</p>
              <p className="help__section_content_description">
                {content.description}
              </p>
            </div>
          ))}
          <Button
            className="help__section_button"
            label={"Get a Free Credit Audit"}
          />
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
