import React from "react";

import "./customers.css";

import {
  customer1,
  customer2,
  customer3,
  Heart,
  Star,
} from "../../assets/images";

function Customers() {
  return (
    <div className="page__spacing customers__wrapper">
      <img alt="heart" className="customers__heart" src={Heart} />
      <img alt="start" className="customers__start" src={Star} />
      <p className="customers__heading">Customers are loving it</p>
      <p className="customers__heading_tagline">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next website fast.
      </p>
      <div className="customers__feedback_wrapper">
        <div className="customers__feedback">
          <div className="customers__feedback_top">
            <img alt="customer" src={customer1} />
            <p className="customer__words">
              “
              <span className="customer__words_highlight">
                You made it so simple.
              </span>{" "}
              My life so much better and easier to work with than my old life.”
            </p>
          </div>
          <div className="customers__feedback_bottom">
            <p className="customer__name">Alan Farmer</p>
            <p className="customer__work">Digital Marketer</p>
          </div>
        </div>
        <div className="customers__feedback">
          <div className="customers__feedback_top">
            <img alt="customer" src={customer2} />
            <p className="customer__words">
              “
              <span className="customer__words_highlight">
                Simply the best.
              </span>{" "}
              Better than all the rest. I’d recommend this product to beginners
              and advanced users.”
            </p>
          </div>
          <div className="customers__feedback_bottom">
            <p className="customer__name">Christina Olson</p>
            <p className="customer__work">Project Manager</p>
          </div>
        </div>
        <div className="customers__feedback">
          <div className="customers__feedback_top">
            <img alt="customer" src={customer3} />
            <p className="customer__words">
              “
              <span className="customer__words_highlight">
                Must have service
              </span>{" "}
              for all, who want to be successful credit planning in the
              professional and personal life.”
            </p>
          </div>
          <div className="customers__feedback_bottom">
            <p className="customer__name">Lewis Ingram</p>
            <p className="customer__work">Banking Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
