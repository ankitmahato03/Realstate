import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";
import{motion, spring} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* Left-side */}
        <div className=" flexColStart  hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            
              <motion.h1 initial={{y:"2rem", opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{
                duration:2,type:"spring"
              }}>
              Discover <br /> Most Suitable <br />
              Property
              </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a verity of property thas suit yous </span>
            <span className="secondaryText">Lorem ipsum dolor sit amet consectetur.</span>
          </div>

          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={900} end={1500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Preimum Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={300} end={500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy clients</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={50} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards wining</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          
          <motion.div className="image-container"
          initial={{x:"7rem", opacity:0}}
          animate={{x:0, opacity: 1  }}
          transition={{duration:2,type:"spring"}}>
            <img src="./hero-image.png" alt="" srcset="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
