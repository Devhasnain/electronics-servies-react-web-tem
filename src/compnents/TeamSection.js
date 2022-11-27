import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { TeamCards } from "../Data/TeamCards";

const TeamSection = () => {
  return (
    <div className="container-fluid" id="team">
      <div className="container-lg">
        <div className="row">
          <div className="col text-center">
            <div className="projects-section-headings pt-5">
              <Heading
                as="h4"
                size="sm"
                letterSpacing="3px"
                color="#009cff"
                mb="5"
              >
                PROJECTS
              </Heading>
              <Heading as="h5" size="2xl" letterSpacing="1px" color="#22395d">
                Project Photo Gallery
              </Heading>
            </div>
          </div>
        </div><br/><br/>
        {TeamCards.slice(0, 1).map((item, index) => {
          return (
            <div className="row team-section-row justify-content-start" key={index}>
              <div className="team-section-cards-col col-lg-6 col-md-9 col-sm-10 col-12 p-0">
                <div className="row align-items-center bg-light">
                  <div className="col text-center">
                    <div>
                      <Heading as="h4" size="lg" fontWeight="semibold">
                        {item.name}
                      </Heading><br/>
                      <Text fontSize="20px">{item.position}</Text><br/>
                      <Text fontSize="18px">{item.des}</Text><br/>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {TeamCards.slice(1, 2).map((item, index) => {
          return (
            <div className="row team-section-row justify-content-end" key={index}>
              <div className="team-section-cards-col col-lg-6 col-md-9 col-sm-10 col-12 p-0">
                <div className="row align-items-center bg-light">
                  <div className="col">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="col text-center">
                    <Heading as="h4" size="lg" fontWeight="semibold">
                      {item.name}
                    </Heading><br/>
                    <Text fontSize="20px">{item.position}</Text><br/>
                    <Text fontSize="19px">{item.des}</Text><br/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {TeamCards.slice(2, 3).map((item, index) => {
          return (
            <div className="row team-section-row justify-content-start p-0" key={index}>
              <div className="team-section-cards-col col-lg-6 col-md-9 col-sm-10 col-12 p-0">
                <div className="row align-items-center bg-light">
                  <div className="col">
                    <div className="text-center">
                    <Heading as="h4" size="lg" fontWeight="semibold">
                      {item.name}
                    </Heading><br/>
                    <Text fontSize="20px">{item.position}</Text><br/>
                    <Text fontSize="19px">{item.des}</Text><br/>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {TeamCards.slice(3, 4).map((item, index) => {
          return (
            <div className="row team-section-row justify-content-end" key={index}>
              <div className="team-section-cards-col col-lg-6 col-md-9 col-sm-10 col-12 p-0">
                <div className="row align-items-center">
                  <div className="col">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                    <Heading as="h4" size="lg" fontWeight="semibold">
                      {item.name}
                    </Heading><br/>
                    <Text fontSize="20px">{item.position}</Text><br/>
                    <Text fontSize="19px">{item.des}</Text><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;
