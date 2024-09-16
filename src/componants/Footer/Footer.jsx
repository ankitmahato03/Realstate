import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="innerWidth paddings flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" srcset="" width={120} />
          <span className="secondaryText">
            one stop for all your home needs
          </span>
        </div>

        {/* right Side  */}

        <div className="f-right flexColStart    ">
          <span className="primaryText">Address</span>
          <span className="secondaryText">Nadia Haringhata W/B 741249</span>

          <div className="flexCenter f-menu">
            <span>Home</span>
            <span> Our Value</span>
            <span> About us</span>
            <span> Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
