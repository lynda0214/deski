import React from "react";

const FeaturesAbout = () => {
  return (
    <div className="row align-items-center">
      <div
        className="col-xl-5 col-lg-6 ml-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="title-style-fourteen">
          <div className="upper-title">GREAT INTERFACE</div>
          <h2>First-class & smooth user experience.</h2>
        </div>
        <div className="tag-line pb-10">
          Deski responds to previous answers to show only the most relevant
          questions. A better experience for respondents better data for you.
        </div>
        <a href="#" className="theme-btn-fourteen">
          Create survay now{" "}
        </a>
      </div>
      <div
        className="col-lg-6 order-lg-first text-center text-lg-left"
        data-aos="fade-right"
      >
        <div className="illustration-holder-two d-inline-block pl-4 pl-md-5 md-mt-90">
          <img src="images/assets/screen_38.png" alt="" className="w-100" />
          <img
            src="images/assets/screen_38.1.png"
            alt=""
            className="shapes shape-one"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAbout;
