import ContactAddress from './address/ContactAddress';
import ContactAddressTwo from './address/ContactAddressTwo';
import ContactForm from './form/ContactForm';
import { Link } from 'react-router-dom';
import LoginForm from './form/LoginForm';
import SignUpForm from './form/SignUpForm';

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

export default function ShowcaseContact() {
  return (
    <>
      <Separater title="<ContactAddress>" />
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper" style={{ marginTop: 0 }}>
            <ContactAddress />
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
        </div>
      </div>
      <Separater title="<ContactAddressTwo>" />
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
          <ContactAddressTwo />
        </div>
      </div>
      <Separater title="<ContactForm>" />
      <div className="contact-us-light pt-140 pb-200 md-pt-90 md-pb-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="container">
          <div className="form-style-light">
            <ContactForm />
          </div>
        </div>
      </div>
      <Separater title="<LoginForm>" />
      <div className="form-wrapper">
        <div className="user-data-page clearfix d-lg-flex">
          <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
            <h3 className="font-rubik">
              Want your best managment <br />
              software? <Link to="/signup">sign up</Link>
            </h3>
            <div className="illustration-holder">
              <img
                src="images/assets/ils_08.svg"
                alt="illustration"
                className="illustration"
              />
              <img
                src="images/assets/ils_08.1.svg"
                alt="illustration"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils_08.2.svg"
                alt="illustration"
                className="shapes shape-two"
              />
            </div>
          </div>
          {/* /.illustration-wrapper */}

          <div className="form-wrapper">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <Link to="/project-management">
                  <img src="images/logo/deski_01.svg" alt="logo" />
                </Link>
              </div>
              <Link
                className="font-rubik go-back-button"
                to="/project-management"
              >
                Go to home
              </Link>
            </div>
            <div className="mt-80 md-mt-40">
              <h2>
                Hi buddy, welcome <br /> Back!
              </h2>
              <p className="header-info pt-30 pb-50">
                Still don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>

            <LoginForm />
            {/* Login Form End */}
            <p className="text-center font-rubik copyright-text">
              Copyright @{new Date().getFullYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes/portfolio"
                target="_blank"
                title="myFrame"
                rel="noreferrer"
              >
                ib-themes
              </a>{" "}
              inc.
            </p>
          </div>
          {/* /.form-wrapper */}
        </div>
      </div>
      <Separater title="<SignUpForm>" />
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            We have a “strategic” plan its <br /> called doing things.
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/event-organizer">
                <img src="images/logo/deski_01.svg" alt="logo" />
              </Link>
            </div>
            <Link className="font-rubik go-back-button" to="/event-organizer">
              Go to home
            </Link>
          </div>
          {/* End d-flex */}
          <div className="mt-30">
            <h2>Join with thousands of startup!</h2>
            <p className="header-info pt-30 pb-50">
              Already have an account? <Link to="login">Login</Link>
            </p>
          </div>
          <SignUpForm />
          {/* End Signup Form */}
          <p className="text-center font-rubik copyright-text">
            Copyright @{new Date().getFullYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              title="myFrame"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            inc.
          </p>
          {/* End .copyright */}
        </div>
        {/* /.form-wrapper */}
      </div>
    </>
  );
}