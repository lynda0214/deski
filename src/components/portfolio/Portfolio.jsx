import React from "react";
import Slider from "react-slick";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioImages = [
  {
    img: "img_73",
    altName: "Screen 1",
  },
  {
    img: "img_74",
    altName: "Screen 2",
  },
  {
    img: "img_75",
    altName: "Screen 3",
  },
  {
    img: "img_76",
    altName: "Screen 4",
  },
  {
    img: "img_75",
    altName: "Screen 5",
  },
  {
    img: "img_76",
    altName: "Screen 6",
  },
  {
    img: "img_73",
    altName: "Screen 7",
  },
];

const Portfolio = () => {
  const settings = {
    dots: false,
    draggable: false,
    arrow: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <SimpleReactLightbox>
        <SRLWrapper>
          <Slider {...settings}>
            {PortfolioImages.map((val, i) => (
              <div className="item" key={i}>
                <div className="img-meta">
                  <img src={`images/media/${val.img}.png`} alt={val.altName} />
                </div>
              </div>
            ))}
          </Slider>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
