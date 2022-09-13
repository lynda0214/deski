import React from "react";

const Social = () => {
  const socialContent = [
    { image: "16", delayAnimatin: "0" },
    { image: "logo-33", delayAnimatin: "100" },
    { image: "11", delayAnimatin: "200" },
    { image: "19", delayAnimatin: "300" },
    { image: "18", delayAnimatin: "400" },
    { image: "22", delayAnimatin: "500" },
  ];
  return (
    <ul className="row align-items-center justify-content-center justify-content-lg-between">
      {socialContent.map((social, i) => (
        <li
          className="mt-20 ml-3 mr-3"
          data-aos="fade-up"
          key={i}
          data-aos-delay={social.delayAnimatin}
        >
          <img src={`images/logo/${social.image}.png`} alt="social" />
        </li>
      ))}
    </ul>
  );
};

export default Social;
