import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_35",
    title: `A Discount Cartridge dsu is Better Ever.`,
    animationDealy: "",
  },
  {
    img: "media_36",
    title: `Truck Side Advertising Isn It Time for action. `,
    animationDealy: "100",
  },
  {
    img: "media_37",
    title: `A discount cartridge dsu is better ever.`,
    animationDealy: "200",
  },
];

const Blog = () => {
  return (
    <>
      {BlogContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <article className="post-meta mt-30">
            <figure className="post-img m0">
              <Link to="/blog-details" className="w-100 d-block">
                <img
                  src={`images/blog/${val.img}.jpg`}
                  alt="blog"
                  className="w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data">
              <h3 className="blog-title">
                <Link to="/blog-details">{val.title}</Link>
              </h3>
              <Link to="/blog-details" className="read-btn tran3s">
                Continue Reading
              </Link>
            </div>
            {/* <!-- /.post-data --> */}
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
