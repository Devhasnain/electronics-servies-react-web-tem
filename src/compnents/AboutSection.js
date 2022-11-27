import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import About from "../media/about.jpg";
const AboutSection = () => {
  return (
    <div className="container-fluid about-section-parent" id="about">
      <div className="container-lg">
        <div className="row align-items-center home-aboutsec-row">
          <div className="col-lg-5 col-md-6 col-sm-10 col-12 mx-auto">
            <div className="img-div-about-sec">
              <img src={About} alt="" className="img-fluid" />
              <div></div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-9 col-11 mx-auto about-comp-sscreen">
            <div className="mx-2">
              <Heading
                as="h4"
                size="sm"
                letterSpacing="3px"
                color="#009cff"
                mb="5"
              >
                ABOUT US
              </Heading>
              <Heading as="h4" size="2xl" letterSpacing="1px" color="#009cff">
                25+ Years Experience{" "}
                <span style={{ color: "#22395d" }}>
                  In Solar Power Industry
                </span>
              </Heading>
              <br />
              <Text fontSize="19px" className="text-muted">
                At sed est eirmod sanctus et amet diam magna. Dolore clita magna
                sed sed stet et, at magna rebum eirmod sanctus ut sed, stet
                tempor dolore rebum sit duo, dolore tempor sit est sit sanctus,
                sit justo sit invidunt clita ut justo diam magna. Erat eos
                nonumy labore dolor. Dolore kasd no et et et elitr. Erat sea
                dolor elitr diam sed lorem rebum et vero.
              </Text><br/><br/>
              <Button size="lg" borderRadius="none" style={{backgroundColor:"#009cff"}}>Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
