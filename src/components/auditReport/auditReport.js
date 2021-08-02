import React from "react";
import "./auditReport.css";

import Button from "../button";

import { auditReport, check } from "../../assets/images";

import { AUDIT_REPORT_CONTENT } from "../../constants/constants";

function AuditReport() {
  return (
    <div className="page__spacing audit__report_wrapper">
      <div className="audit__report_left">
        <p className="audit__report_title">Get A Free Credit Audit Report</p>
        <p className="audit__report_description">
          Let’s take an X-ray examination of your credit history and put a
          realistic plan together. Don’t you want to know why you are paying
          high for everything? Let our experts analyze your reports and put you
          back in the win.
        </p>

        <p className="audit__report_label">You will receive</p>

        {AUDIT_REPORT_CONTENT.map((report) => (
          <p key={report.title} className="audit__report_info_list">
            <img alt="check-icon" src={check} /> <span>{report.title}</span>
          </p>
        ))}
        <Button
          className="audit__report_button"
          label={"Get a Free Credit Audit"}
        />
      </div>
      <div className="audit__report_right">
        <img alt="audit report" src={auditReport} />
      </div>
    </div>
  );
}

export default AuditReport;
