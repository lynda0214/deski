import CallToAction from './CallToAction';
import CallToActionTwo from './CallToActionTwo';
import CallToActionThree from './CallToActionThree';
import CallToActionFour from './CallToActionFour';
import CallToActionFive from './CallToActionFive';
import CallToActionSix from './CallToActionSix';
import CallToActionSeven from './CallToActionSeven';

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

export default function ShowcaseCTA() {
  return (
    <>
      <Separater title="<CallToAction>"/>
      <div className="fancy-short-banner-fifteen mt-150 md-mt-80">
        <CallToAction />
      </div>
      <Separater title="<CallToActionTwo>"/>
      <div className="fancy-short-banner-four m0">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionTwo />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}
      <Separater title="<CallToActionThree>"/>
      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}
      <Separater title="<CallToActionFour>"/>
      <div className="fancy-short-banner-one space-fix">
        <div className="container">
          <CallToActionFour />
        </div>
        {/*  /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/*  /.fancy-short-banner-one */}
      <Separater title="<CallToActionFive>"/>
      <div className="fancy-short-banner-five with-bg pt-130 pb-150 md-pt-100 md-pb-120">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}
      <Separater title="<CallToActionSix>"/>
      <div className="fancy-short-banner-thirteen mt-200 md-mt-130">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 m-auto">
                <CallToActionSix />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}
      <Separater title="<CallToActionSeven>"/>
      <CallToActionSeven/>
    </>
  );
}
