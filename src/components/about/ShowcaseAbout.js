import About from './About';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';
import AboutFour from './AboutFour';
import AboutFive from './AboutFive';

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

export default function ShowcaseAbout() {
  return (
    <>
      <Separater title="<About>" />
      <div className="fancy-text-block-nineteen mb-200 md-mb-150">
        <div className="container">
          <About />
        </div>
      </div>
      <Separater title="<AboutTwo>" />
      <div className="container">
        <AboutTwo />
      </div>
      <AboutTwo />
      <Separater title="<AboutThree>" />
      <div className="fancy-text-block-eleven pt-50">
        <div className="container">
          <AboutThree />
        </div>
      </div>
      <Separater title="<AboutFour>" />
      <div className="fancy-text-block-fourteen pt-30">
        <div className="container">
          <AboutFour />
        </div>
      </div>
      <Separater title="<AboutFive>" />
      <div className="fancy-text-block-eleven mt-225 md-mt-100">
        <div className="container">
          <AboutFive />
        </div>
      </div>
    </>
  );
}
