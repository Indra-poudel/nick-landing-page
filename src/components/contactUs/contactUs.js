import React from "react";

import Button from "../button";

import { BUTTON_NAVBAR_MENU_LIST } from "../../constants/constants";

import "./contactUs.css";

function ContactUs() {
  const QuickLinks = (props) => {
    return (
      <div className="quickLinks__wrapper">
        <p className="quickLinks__title">{props.title}</p>
        {props.description && (
          <p className="quickLinks__description">{props.description}</p>
        )}
        {props.links &&
          props.links.map((link) => (
            <li key={link.label} className="quickLinks__link">
              {link.label}
            </li>
          ))}
      </div>
    );
  };

  return (
    <div className="page__spacing contact__us_wrapper">
      <p className="contact__us_heading">Contact us to fix your credit</p>
      <p className="contact__us_heading_tagline">
        Give us your name and email address we will get back to you to fix your
        credit
      </p>
      <div className="contact__us_form">
        <div className="contact__us_row1">
          <input
            className="contact__us_input"
            type="text"
            placeholder="First Name"
          />
          <input
            className="contact__us_input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="contact__us_row2">
          <input
            className="contact__us_input"
            type="email"
            placeholder="Enter your email address"
          />
          <Button className="contact__us_button" label={"Contact us"} />
        </div>
      </div>

      <div className="bottom__info_wrapper">
        <QuickLinks
          title="Clearknox is a Brand of:"
          description={`FRESH START CREDIT INC
                4310 West Grace Street,
                Tampa, Florida 33607
                Phone: (813) 540-2969
                Email: hello@renoix.com`}
        />
        <QuickLinks
          title="Quick Links"
          links={[
            {
              label: "How it works",
            },
            {
              label: "Pricing",
            },
            {
              label: "Who We Are",
            },
          ]}
        />
        <QuickLinks
          title="Credit Repair"
          links={[
            {
              label: "For Buying a Car",
            },
            {
              label: "For Buying a House",
            },
            {
              label: "For Getting a Loan",
            },
            {
              label: "For Shop Credit",
            },
            {
              label: "For Business",
            },
          ]}
        />
        <QuickLinks
          title="Clearknox is a Brand of:"
          links={[
            {
              label: "Login/Sign up",
            },
          ]}
        />
      </div>

      <div className="bottom_navbar__wrapper">
        <p className="bottom_navbar_copyright">© Clearonox </p>
        <ul className="bottom_navbar__ul">
          {BUTTON_NAVBAR_MENU_LIST.map((navbar) => (
            <li
              key={navbar.key}
              className={`bottom_navbar__wrapper_li ${navbar.key}`}
            >
              {navbar.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
