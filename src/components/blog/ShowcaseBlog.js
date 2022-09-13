import BlogSidebar from './BlogSidebar';
import BlogSidebarClassic from './BlogSidebarClassic';
import BlogStyle1 from './BlogStyle1';
import BlogStyle2 from './BlogStyle2';
import BlogStyle3 from './BlogStyle3';
import BlogStyle4 from './BlogStyle4';
import BlogStyle5 from './BlogStyle5';
import BlogStyle6 from './BlogStyle6';

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

export default function ShowcaseBlog() {
  return (
    <>
      <Separater title="<BlogSidebar>" />
      <div className="blog-page-white-bg blog-v2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Separater title="<BlogSidebarClassic>" />
      <div className="blog-page-white-bg blog-v3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <BlogSidebarClassic />
            </div>
          </div>
        </div>
      </div>
      <Separater title="<BlogStyle1>" />
      <div className="feature-blog-one blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <BlogStyle1 />
          </div>
          {/* End .row */}
          <div
            className="text-center mt-30 md-mt-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <a href="#" className="theme-btn-one">
              Show More
            </a>
          </div>
        </div>
      </div>
      <Separater title="<BlogStyle2>" />
      <div className="blog-page-white-bg blog-v2">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 feature-blog-one width-lg">
              <BlogStyle2 />
              <div className="page-pagination-one pt-15">
                <ul className="d-flex align-items-center">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li> &nbsp; ... &nbsp;</li>
                  <li>
                    <a href="#">13</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.page-pagination-one */}
            </div>
          </div>
        </div>
      </div>
      <Separater title="<BlogStyle3>"/>
      <div className="blog-page-white-bg blog-v4">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="wrapper">
            <BlogStyle3 />
            <div className="page-pagination-one pt-15">
              <ul className="d-flex align-items-center">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li> &nbsp; ... &nbsp;</li>
                <li>
                  <a href="#">13</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.page-pagination-one */}
          </div>
          {/* End .wrapper */}
        </div>
      </div>
      <Separater title="<BlogStyle4>"/>
      <div className="feature-blog-two pt-150 pb-170 md-pt-100 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="title-style-one text-center mb-50 md-mb-20">
                <h6 className="font-rubik" style={{ color: "#787CFF" }}>
                  Some success stories
                </h6>
                <h2>
                  Some well known companies get real benifits to work with
                  deski.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>

          <div className="row justify-content-center">
            <BlogStyle4 />
          </div>
        </div>
      </div>
      <Separater title="<BlogStyle5>"/>
      <div className="feature-blog-four mt-250 md-mt-200">
        <div className="container">
          <div className="title-style-five text-center mb-70 md-mb-50">
            <h6>News & Updates</h6>
            <h2>Latest news & articles</h2>
          </div>
          {/* End .title */}
          <div className="row">
            <BlogStyle5 />
          </div>
        </div>
      </div>
      <Separater title="<BlogStyle6>"/>
      <div className="feature-blog-one pt-170 pb-120 md-pt-100 md-pb-60">
        <div className="container">
          <div className="header d-md-flex align-items-center justify-content-between mb-90 md-mb-40">
            <div className="title-style-one">
              <h6 className="font-rubik">Our News</h6>
              <h2>Have any thought? Look here.</h2>
            </div>
            {/*  /.title-style-one */}
            <a href="blog-v1.html" className="theme-btn-one sm-mt-30">
              Go to Blog
            </a>
          </div>
          {/* End .header */}
          <div className="row justify-content-center">
            <BlogStyle6 />
          </div>
        </div>
      </div>
    </>
  );
}