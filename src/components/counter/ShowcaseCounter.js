import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import CounterThree from './CounterThree';
import CounterThreeColored from './CounterThreeColored';
import CounterFour from './CounterFour';
import CounterFive from './CounterFive';
import CounterFiveColored from './CounterFiveColored';
import CounterSix from './CounterSix';

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

export default function ShowcaseCounter () {
  return (
    <>
      <Separater title="<CounterOne>"/>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-md-6 col-sm-10 m-auto"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <CounterOne />
          </div>
          {/* End .col */}

          <div
            className="col-xl-6 col-lg-7 ml-auto"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="quote-wrapper pt-60">
              <img src="images/icon/185.png" alt="icon" className="icon" />
              <blockquote className="font-rubik">
                Deski combines excellent live chat, ticketing and automation
                that allow us to provide quality.
              </blockquote>
              <h6 className="mt-20">
                Mike Lucas. <span>CEO & Founder deksi</span>
              </h6>
            </div>
            {/* <!-- /.quote-wrapper --> */}
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      <Separater title="<CounterTwo>"/>
      <CounterTwo />
      <Separater title="<CounterThree>"/>
      <CounterThree />
      <Separater title="<CounterThreeColored>"/>
      <CounterThreeColored />
      <Separater title="<CounterFour>"/>
      <div className="counter-info pt-30">
        <div className="container">
          <CounterFour />
        </div>
      </div>
      <Separater title="<CounterFive>"/>
      <div className="counter-info pt-30">
        <div className="container">
          <CounterFive />
        </div>
      </div>
      <Separater title="<CounterFiveColored>"/>
      <div className="counter-info pt-30">
        <div className="container">
          <CounterFiveColored />
        </div>
      </div>
      <Separater title="<CounterSix>"/>
      <div className="counter-info pt-40">
        <div className="container">
          <CounterSix/>
        </div>
      </div>
    </>
  );
}