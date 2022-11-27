import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Slider from "react-slick";
import Banner1 from "../media/carousel-1.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
        <div className="container-fluid home-div-main" >
      <div className="overlay-banner"></div>
            <div className="banner-div">
                <img src={Banner1} alt="" />
            </div>
          <div className="row content-div-carusel">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12 mx-auto carusel-content-div text-center pt-5">
              <Heading
                as="h2"
                size="md"
                letterSpacing="2px"
                fontWeight="semibold"
                color="white"
                p="2"
                mb="3"
              >
                SALMANS COOLING
              </Heading>
              <Heading
                as="h2"
                size="4xl"
                color="white"
                fontWeight="bold"
                letterSpacing="2px"
              >
                LETS COOL DOWN <br />
                HOME LOREM
              </Heading>
              <br />
              <Button
                style={{ backgroundColor: "white" }}
                my="3"
                borderRadius="none"
                size="lg"
              >
                Get a Quote
              </Button><br/><br/>
                <Box w="40" display="flex" justifyContent="center" h="40" margin="auto" overflow="hidden">
                <FaChevronDown style={{cursor:"pointer"}} size={39} color="white" />
                </Box>
              </div>
            </div>
          </div>
    </Slider>
  );
};
export default SimpleSlider;
