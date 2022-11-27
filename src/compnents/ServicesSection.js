import { Heading } from "@chakra-ui/react";
import React from "react";
import {Cards} from '../Data/Cards'

const ServicesSection = () => {
  return (
    <div className="container-fluid" id="services">
      <div className="container">
        <div className="row p-5">
          <div className="col text-center">
            <div className="service-section-headings">
            <Heading
              as="h4"
              size="sm"
              letterSpacing="3px"
              color="#009cff"
              mb="5"
            >
              SERVICES
            </Heading>
            <Heading as="h5" size="2xl" letterSpacing="1px" color="#22395d">
            What We Cover
            </Heading>
            </div>
          </div>
        </div>
        <div className="row">
          {Cards.map((item)=>{
            return (
                <div className="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto p-3" key={item.id}>
                    <div className="services-section-cards-hover">
                        <div className="img-div-service">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="text-center p-3">
                            <Heading as="h2" size="lg" color="#22395d">{item.title}</Heading>
                        </div>
                    </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
