import BlockMetaData from './BlockMetaData';
import FancyTextBlock21 from './FancyTextBlock21';
import FancyTextBlock22 from './FancyTextBlock22';
import FancyTextBlock29 from './FancyTextBlock29';
import FancyTextBlockTen from './FancyTextBlockTen';
import FancyTextBlockThree from './FancyTextBlockThree';

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

export default function ShowcaseFancyTextBlock() {
  return (
    <>
      <Separater title="<BlockMetaData>"/>
      <div className="block-style-one mt-50">
        <div className="container">
          <div className="d-lg-flex align-items-center justify-content-between inner-container">
            <BlockMetaData />
          </div>
        </div>
        {/* /.container */}
      </div>
      <Separater title="<FancyTextBlock21>"/>
      <div className="fancy-text-block-twentyOne pt-50" id="about">
        <div className="container">
          <FancyTextBlock21 />
        </div>
      </div>
      <Separater title="<FancyTextBlock22>"/>
      <div
        className="fancy-text-block-twentyTwo lg-container pt-50"
        id="why_us"
      >
        <div className="container">
          <FancyTextBlock22 />
        </div>
      </div>
      <Separater title="<FancyTextBlock29>"/>
      <div
        className="fancy-feature-twentyNine lg-container pt-50 mt-20 md-pt-70"
        id="p-tour"
      >
        <FancyTextBlock29 />
      </div>
      <Separater title="<FancyTextBlockTen>"/>
      <div className="fancy-text-block-ten mt-170 md-mt-100 mb-50">
        <div className="container">
          <FancyTextBlockTen />
        </div>
      </div>
      <Separater title="<FancyTextBlockThree>"/>
      <div className="fancy-text-block-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <FancyTextBlockThree />
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-10 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <p className="font-rubik slogan">
                We break down barriers so teams can focus on what matters
                working together to create products their customers love.
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
      </div>
    </>
  )
}