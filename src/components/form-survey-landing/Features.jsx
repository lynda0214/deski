import React from "react";

const Features = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-lg-7 order-lg-last" data-aos="fade-left">
        <div className="pl-lg-5">
          <div className="title-style-fourteen">
            <div className="upper-title">Made for human</div>
            <h2>Quality, actionable data process.</h2>
          </div>
          <div className="tag-line">
            Creating an online survey has never been easier. With many advanced
            features of deski.
          </div>
          <ul className="list-item">
            <li>Easy-to-use survey maker interface</li>
            <li>Drag and Drop to change the order of questions</li>
            <li>Quota management</li>
            <li>Step view layout for interactive survey filling experiences</li>
            <li>Customizable URL</li>
          </ul>
        </div>
      </div>
      {/* Emd .col */}

      <div
        className="col-xl-6 col-lg-5 text-center text-lg-left order-lg-first"
        data-aos="fade-right"
      >
        <div className="illustration-holder d-inline-block md-mt-60">
          <img src="images/assets/ils_23.svg" alt="" className="w-100" />
          <img
            src="images/assets/ils_23.1.svg"
            alt=""
            className="shapes shape-one"
          />
          <img
            src="images/assets/ils_23.2.svg"
            alt=""
            className="shapes shape-two"
          />
          <img
            src="images/assets/ils_23.3.svg"
            alt=""
            className="shapes shape-three"
          />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Features;
