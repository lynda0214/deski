import AboutTabs from './AboutTabs';
import DocAsTabs from './DocAsTabs';
import DocEditorTabs from './DocEditorTabs';
import DocSlickAsNav from './DocSlickAsNav';
import DocSlickAsNavTwo from './DocSlickAsNavTwo';

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

export default function ShowcaseBlock() {
  return (
    <>
      <Separater title="<AboutTabs>" />
      <div className="fancy-text-block-twenty">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ml-auto"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <AboutTabs />
            </div>
          </div>
        </div>
      </div>
      <Separater title="<DocAsTabs>" />
      <div className="main-page-wrapper font-gordita">
        <div className="fancy-feature-fifteen pt-120 md-pt-80" id="product">
          <div className="bg-wrapper">
            <div className="container">
              <div className="sldier-wrapper">
                <DocAsTabs />
              </div>
            </div>
            <img
              src="images/shape/168.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/169.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
        </div>
      </div>
      <Separater title="<DocEditorTabs>" />
      <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
        <DocEditorTabs />
      </div>
      <Separater title="<SlickAsNav>" />
      <div className="fancy-text-block-sixteen mt-200 md-mt-80">
        <div className="container">
          <DocSlickAsNav />
        </div>
      </div>
      <Separater title="<DocSlickAsNavTwo>" />
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Bring all Team <span>Managment</span> & task togather
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit io sed do eiusmod tempor
                  dsu elit
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavTwo />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>
    </>
  );
}