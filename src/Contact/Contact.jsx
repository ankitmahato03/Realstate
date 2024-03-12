import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}

        <div className=" flexColStart c-left">
          <span className="orangeText"> Contact Us </span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde
            dolore error eveniet?
          </span>

          <div className="flexColStart contactMode">
            {/* Frist Row */}

            <div className="flexStart row">
              {/* Frist Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91952397845</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+91952397845</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second Row */}

            <div className="flexStart row">
              {/* Third Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText"> Video Call</span>
                    <span className="secondaryText">+91952397845</span>
                  </div>
                </div>
                <div className="flexCenter button"> Video Call Now</div>
              </div>

              {/* Fourth Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Massage</span>
                    <span className="secondaryText">+91952397845</span>
                  </div>
                </div>
                <div className="flexCenter button">Massage Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
