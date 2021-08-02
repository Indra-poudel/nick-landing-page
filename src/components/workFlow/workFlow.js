import React from "react";

import "./workFlow.css";
import Button from "../button";
import { HOW_IT_WORKS_STEPS } from "../../constants/constants";

function WorkFlow() {
  return (
    <div className="page__spacing workflow__wrapper">
      <h1 className="workflow__heading">How it works</h1>
      {HOW_IT_WORKS_STEPS.map((step, index) => (
        <div key={index} className={`workflow__content ${step.className}`}>
          <div className="workflow__content_img">
            <img alt="step" src={step.image} />
          </div>
          <div className="workflow__content_body">
            <p className={`workflow___content_title`}>{`${index + 1}. ${
              step.title
            }`}</p>
            <p className="workflow__content_description">{step.description}</p>
            <Button
              className="workflow__button"
              label={"Get a Free Credit Audit"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkFlow;
