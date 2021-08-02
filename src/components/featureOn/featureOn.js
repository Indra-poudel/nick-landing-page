import React from "react";
import "./featureOn.css";

import { arrow } from "../../assets/images";

import { FEATURED_ON_COMPANIES, QUESTIONS } from "../../constants/constants";

function featureOn() {
  return (
    <>
      <div className="page__spacing featured__on_wrapper">
        <p className="featured__on_title">Featured on</p>
        <div className="featured__on_company_list">
          {FEATURED_ON_COMPANIES.map((company) => (
            <img alt={company.key} src={company.img} />
          ))}
        </div>
      </div>
      <div className="page__spacing question__wrapper">
        <p className="question__wrapper_heading">Q&A</p>
        <div className="question__wrapper_block">
          {QUESTIONS.map((question, index) => (
            <p key={index} className="question__wrapper_question">
              {question.question}{" "}
              <img
                className="question__wrapper_arrow"
                alt="arrow"
                src={arrow}
              />
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default featureOn;
