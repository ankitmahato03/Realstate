import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../utils/accordion'
import { useState } from "react";



const Value = () => {
  return (
    <section className="v-wrapper ">
      <div className="paddings flexCenter innerWidth v-container">
        {/* left side  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" srcset="" />
          </div>
        </div>

        {/* Rightside */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our value</span>
          <span className="primaryText">Value give to you </span>
          <span className="SecondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            quis delectus nobis aliquid, velit, officia minus aliquam porro.
          </span>

          <Accordion 
          className="accordon"
          allowMultipleExpanded={false}
          preExpanded={[0]}>
            {
                data.map((item,i)=>{
                    const [className,setClassName]=useState(null)
                    return(
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordianButton ">
                                    <AccordionItemState>
                                        {({expanded})=>expanded ? setClassName("expanded"):setClassName("collapsed")}
                                    </AccordionItemState>
                                    <div className="flexCenter icon">
                                        {item.icon}
                                    </div>
                                    <span className="primaryText">{item.heading}</span>
                                    <div className="flexCenter icon">
                                        <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>

                        </AccordionItem>
                    )
                })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
