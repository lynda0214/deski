import React from "react";

const BlockFeaturesTwo = () => {
  return (
    <div className="block-style-thirtyEight">
      <div className="row align-items-center">
        <div
          className="col-xl-5 col-lg-6 order-lg-last ml-auto"
          data-aos="fade-left"
        >
          <div className="title-style-sixteen">
            <div className="upper-title">Gaming</div>
            <h2>PLAY FAVORITES GAMES.</h2>
          </div>
          <p className="mt-30 pr-xl-5">
            From multiplayer games to unique experiences to joining up with
            friends at a live show or instructor-led workout, opportunities to
            meet & connect with others.
          </p>
        </div>
        <div className="col-xl-7 col-lg-5 col-md-8" data-aos="fade-right">
          <div className="img-meta d-inline-block position-relative md-mt-70">
            <img src="images/media/img_122.jpg" alt="media" />
            <img
              src="images/media/img_123.png"
              alt="media"
              className="shapes shape-three"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeaturesTwo;
