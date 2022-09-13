import BrandThree from './BrandThree';
import BrandSix from './BrandSix';
import BrandSeven from './BrandSeven';

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

export default function ShowcaseBrand() {
  return (
    <>
      {/*<Separater title="<Brand>" />*/}
      {/*<Brand />*/}
      {/*<Separater title="<BrandTwo>" />*/}
      {/*<BrandTwo />*/}
      <Separater title="<BrandThree>" />
      <div className="useable-tools-section-three pt-200 pb-200 md-pt-100 md-pb-80 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-four">
                <h2>
                  <span>
                    Who is using ours
                    <img src="images/shape/line-shape-10.svg" alt="shape" />
                  </span>
                  deski docs?
                </h2>
              </div>
              <p className="sub-text">
                Deski ties into your existing tools, services, & workflow. Get
                notifications or create story with others tools.
              </p>
              <a href="#" className="all-button">
                See all partners <i className="flaticon-right-arrow"></i>
              </a>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}

        <div
          className="
        logo-wrapper
        d-flex
        flex-wrap
        justify-content-center
        align-items-center
      "
        >
          <BrandThree />
        </div>
        {/*  /.logo-wrapper */}
      </div>
      {/*<Separater title="<BrandFour>" />*/}
      {/*<BrandFour />*/}
      {/*<Separater title="<BrandFive>" />*/}
      {/*<BrandFive />*/}
      <Separater title="<BrandSix>" />
      <div className="useable-tools-section-four lg-container">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <div className="title-style-nine">
                    <h2>Integrate Any Tools Seamlessly.</h2>
                  </div>
                  <p>
                    Commonly used in the graphic, print quis & publishing
                    industris for previewing nor visual layout and mockups.
                  </p>
                  <a href="#" className="theme-btn-ten">
                    See all integrations{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div className="col-xl-5 col-lg-6 ml-auto">
                <div className="logo-container h-100">
                  <div className="inner-wrapper">
                    <BrandSix />
                  </div>
                  {/* /.inner-wrapper */}
                </div>
                {/* /.logo-container */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separater title="<BrandSeven>" />
      <div className="portfolio-details-one mt-75 mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="header text-center">
                <ul className="d-flex justify-content-center social-icon mt-35">
                  <BrandSeven />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}