import React from "react";

import Navbar from "../components/navbar";
import Banner from "../components/banner";
import HelpSection from "../components/helpSection";
import AuditReport from "../components/auditReport";
import WorkFlow from "../components/workFlow";
import Customer from "../components/customers";
import FeatureOn from "../components/featureOn";
import ContactUs from "../components/contactUs";

import "./landingPage.css";

function landingPage() {
  return (
    <div className="landingPage__wrapper">
      <Navbar />
      <Banner />
      <HelpSection />
      <AuditReport />
      <WorkFlow />
      <Customer />
      <FeatureOn />
      <ContactUs />
    </div>
  );
}

export default landingPage;
