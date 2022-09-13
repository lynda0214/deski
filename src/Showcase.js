import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
// about
import ShowcaseAbout from './components/about/ShowcaseAbout';
// block slider
import ShowcaseBlock from './components/block-slider/ShowcaseBlock';
// blog
import ShowcaseBlog from './components/blog/ShowcaseBlog';
// brand
import ShowcaseBrand from './components/brand/ShowcaseBrand';
// call-to-action
import ShowcaseCTA from './components/call-to-action/ShowcaseCTA';
// contact
import ShowcaseContact from './components/contact/ShowcaseContact';
// counter
import ShowcaseCounter from './components/counter/ShowcaseCounter';
// fancy-text-block
import ShowcaseFancyTextBlock from './components/fancy-text-block/ShowcaseFancyTextBlock';
import Faq from './components/faq/Faq';
import FaqClassic from './components/faq/FaqClassic';
import FaqClassicTwo from './components/faq/FaqClassicTwo';
import FaqClassicThree from './components/faq/FaqClassicThree';
import FaqFour from './components/faq/FaqFour';
import FaqThree from './components/faq/FaqThree';

const Separater = ({ title }) => <div
  style={{
    background: 'yellowgreen',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100vw',
    position: 'absolute',
    left: 0,
    zIndex: '100'
  }}>{title}</div>;

const Showcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>
        <title>Deski - Saas & Software React Template</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/ib-themes"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deski: Creative Saas & Software React Template"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase, Digital marketing agency, Digital marketing company, Digital marketing services, sass, software company"
        />
        <meta
          name="description"
          content="Deski is a creative saas and software React template designed for saas and software Agency websites."
        />
        <meta name="description" content="Portfolio & Agency React Template" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Router>
        <div className="font-gordita" style={{ overflowY: 'hidden' }}>
          {/* About */}
          <ShowcaseAbout />
          {/* block slider */}
          <ShowcaseBlock />
          {/* blog */}
          <ShowcaseBlog />
          {/* brand */}
          <ShowcaseBrand />
          {/* call-to-action */}
          <ShowcaseCTA />
          {/* contact */}
          <ShowcaseContact/>
          {/* counter */}
          <ShowcaseCounter/>
          {/* fancy-text-block */}
          <ShowcaseFancyTextBlock/>
          {/* faq */}
          <Separater title="<Faq>"/>
          <div className="fancy-text-block-six overflow-hidden mt-50">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="title-style-five mb-35">
                    <h6>Why choose us</h6>
                    <h2>
                      <span>Why you should</span> choose us?
                    </h2>
                  </div>
                  {/* End title */}
                  <Faq />
                </div>

                <div
                  className="col-lg-6 col-md-8 m-auto"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder d-flex justify-content-end md-mt-50">
                    <img src="images/media/img_58.png" alt="media" />
                    <img
                      src="images/shape/113.svg"
                      alt="media"
                      className="shapes shape-one"
                    />
                  </div>
                  {/* /.illustration-holder */}
                </div>
              </div>
            </div>
          </div>
          <Separater title="<FaqClassic>"/>
          <FaqClassic/>
          <Separater title="<FaqClassicTwo>"/>
          <FaqClassicTwo/>
          <Separater title="<FaqClassicThree>"/>
          <FaqClassicThree/>
          <Separater title="<FaqFour>"/>
          <FaqFour/>
          <Separater title="<FaqThree>"/>
          <FaqThree/>
        </div>
      </Router>
    </>
  );
};

export default Showcase;
