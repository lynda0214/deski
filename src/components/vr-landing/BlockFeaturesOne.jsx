import React from "react";

const BlockFeaturesOne = () => {
  return (
    <div className="block-style-thirtyEight mb-200 md-mb-150">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6" data-aos="fade-right">
          <div className="title-style-sixteen">
            <div className="upper-title">Easy to use,</div>
            <h2>
              READY, <br /> HEADSET, GO
            </h2>
          </div>
          <p className="mt-30 pr-xl-5">
            No wires means you're not stuck playing Quest 2 at home. You’re free
            to take all the games, workouts, shows, experiences and more on the
            road with you.
          </p>
        </div>
        <div
          className="col-xl-7 col-lg-5 col-md-8 ml-auto text-right"
          data-aos="fade-left"
        >
          <div className="img-meta d-inline-block position-relative md-mt-70">
            <img src="images/media/img_120.jpg" alt="media" />
            <img
              src="images/shape/244.svg"
              alt="media"
              className="shapes shape-one"
              data-aos="fade-down"
              data-aos-delay="300"
            />
            <img
              src="images/media/img_121.png"
              alt="media"
              className="shapes shape-two"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeaturesOne;
