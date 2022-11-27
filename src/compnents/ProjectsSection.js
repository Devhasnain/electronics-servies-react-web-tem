import { Heading } from "@chakra-ui/react";
import React from "react";
import ProjectsSlider from "./ProjectsSlider";
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'

const ProjectsSection = () => {
  return (
    <div className="container-fluid projects-section-parent my-5" id="projects">
      <div className="overlay"></div>
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
        </div>
        <div className="row projects-icons-div my-3">
          <div className="d-flex justify-content-between">
          <button><FaAngleLeft size={35} color="white"/></button>
          <button><FaAngleRight size={35} color="white"/></button>
          </div>
        </div>
            <ProjectsSlider/>
      </div>
    </div>
  );
};

export default ProjectsSection;
