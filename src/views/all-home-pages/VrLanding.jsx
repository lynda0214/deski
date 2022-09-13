import React from "react";
import CopyRightThree from "../../components/footer/CopyRightThree";
import FooterSeven from "../../components/footer/FooterSeven";
import BlockFeaturesOne from "../../components/vr-landing/BlockFeaturesOne";
import BlockFeaturesTwo from "../../components/vr-landing/BlockFeaturesTwo";
import FancyFeature from "../../components/vr-landing/FancyFeature";
import FancyVideo from "../../components/vr-landing/FancyVideo";
import FeatureCounter from "../../components/vr-landing/FeatureCounter";
import HeaderLanding from "../../components/vr-landing/Header";
import HeroBanner from "../../components/vr-landing/HeroBanner";
import LatestProduct from "../../components/vr-landing/LatestProduct";
import Testimonials from "../../components/vr-landing/Testimonials";

const VrLanding = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-fourteen lg-container" id="home">
        <div className="container">
          <HeroBanner />
          <div className="screen-holder">
            <img src="images/shape/241.svg" alt="" className="img-meta" />
            <img
              src="images/assets/ils-03.png"
              alt="illustration"
              className="shapes vr-image"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-two"
              width="45"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-three"
              width="75"
            />
            <div className="rating-box">
              <img src="images/shape/243.svg" alt="" />
              <div className="rate">
                9.3 <br />
                <span>Rating</span>
              </div>
            </div>
          </div>
          {/* <!-- /.screen-holder --> */}
        </div>
      </div>
      {/* <!-- /.hero-banner-fourteen --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Six
			============================================== 
			--> */}
      <div
        className="fancy-feature-thirtySix lg-container pt-170 pb-110 md-pt-120 md-pb-60"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-eleven md-mb-40 text-center text-lg-left">
                <h2 className="text-white">Our latest Arrival.</h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="product_slider_one vr-landing-slider">
                <LatestProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtySix --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Seven
			============================================== 
			--> */}
      <div
        className="fancy-feature-thirtySeven lg-container pt-120"
        id="feature"
      >
        <FancyFeature />
      </div>
      {/* <!-- /.fancy-feature-thirtySeven --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Eight
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyEight lg-container mt-75 pb-150 md-pb-80">
        <div className="container">
          <div className="top-border pt-70 md-pt-30">
            <div className="row justify-content-center">
              <FeatureCounter />
            </div>
          </div>
          {/* <!-- /.top-border --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyEight --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Nine
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyNine lg-container position-relative">
        <div className="container">
          <div className="row">
            <FancyVideo />
          </div>
        </div>
        <div className="img-meta">
          <img src="images/media/img_119.png" alt="vr" data-aos="fade-up" />
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyNine --> */}

      {/* <!--
			=====================================================
				Fancy Feature Forty
			=====================================================
			--> */}
      <div
        className="fancy-feature-forty lg-container pt-225 md-pt-120"
        id="product-details"
      >
        <div className="container">
          <BlockFeaturesOne />
          {/* <!-- /.block-style-thirtyEight --> */}

          <BlockFeaturesTwo />
          {/* <!-- /.block-style-thirtyEight --> */}
        </div>
      </div>
      {/* <!-- /.fancy-feature-forty --> */}

      {/* <!--
			=====================================================
				Client Feedback Slider Nine
			=====================================================
			--> */}
      <div
        className="client-feedback-slider-nine lg-container position-relative mt-250 md-mt-150"
        id="testimonial"
      >
        <img
          src="images/shape/245.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="title-style-sixteen text-center">
            <div className="upper-title">Testimonials</div>
            <h2 className="text-white">Client Feedback</h2>
          </div>
          <div className="main-content position-relative mt-60">
            <div className="clientSliderEight slick-arrow-none">
              <Testimonials />
            </div>
          </div>
          {/* <!-- /.main-content --> */}
        </div>
      </div>
      {/* <!-- /.client-feedback-slider-nine --> */}

      {/* <!--
			=====================================================
				Fancy Feature Forty One
			=====================================================
			--> */}
      <div className="fancy-feature-fortyOne lg-container mt-180 md-mt-120 ">
        <div className="container">
          <div className="border-bottom pb-150 md-pb-80">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last" data-aos="fade-left">
                <div className="title-style-sixteen">
                  <h2>Get Your VR Headset & start Rocking.</h2>
                </div>
                <p className="pr-xl-5 mt-30 mb-50">
                  Enjoy exclusive premium concerts, movies, games and other
                  exciting item.
                </p>
                <a href="#" className="buy-btn tran3s">
                  BUY NOW
                </a>
              </div>
              {/* End .col */}

              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src="images/media/img_124.png"
                  alt=""
                  className="md-mt-70"
                />
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-fortyOne --> */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default VrLanding;
