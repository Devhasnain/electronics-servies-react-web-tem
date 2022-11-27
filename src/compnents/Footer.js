import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaAngleRight, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="container-fluid footer-parent-div">
      <div className="container-lg">
        <div className="row footer-headings-div">
          <div className="col text-center">
            <Heading as="h4" size="md" color="#009cff" letterSpacing="2px">
              OUR SHOP
            </Heading>
            <Text fontSize="18px" color="white">
              123 Street, New York, USA
            </Text>
          </div>
          <div className="col text-center">
            <Heading as="h4" size="md" color="#009cff" letterSpacing="2px">
              EMAIL US
            </Heading>
            <Text fontSize="18px" color="white">
              mail@domain.com
            </Text>
          </div>
          <div className="col text-center">
            <Heading as="h4" size="md" color="#009cff" letterSpacing="2px">
              CELL US
            </Heading>
            <Text fontSize="18px" color="white">
              +012 345 6789
            </Text>
          </div>
        </div>
      </div>
      <div className="container-lg my-5 p-0">
        <div className="row m-0">
          <div className="col-lg-4 col-md-4 col-sm-10 col-11 mx-auto">
            <Text fontSize="19px" color="white">
              Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam
              elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea, est
              et et lorem ut at erat, gubergren ipsum et ipsum elitr et rebum
              rebum
            </Text>
            <div className="d-flex my-4">
              <Box
                w="50px"
                mx="2"
                className="footer-icons"
                h="50px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="50px"
                mx="2"
                className="footer-icons"
                h="50px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="50px"
                mx="2"
                className="footer-icons"
                h="50px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="50px"
                mx="2"
                className="footer-icons"
                h="50px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 col-11 mx-auto">
            <div>
              <Heading as="h4" size="md" color="#009cff" letterSpacing="4px">
                OUT PROJECTS
              </Heading>
              <ul className="footer-ul">
                <li>
                  <Link to="" className="d-flex align-items-center">
                    <FaAngleRight size={20} /> <span>Product 1</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="d-flex align-items-center">
                    <FaAngleRight size={20} /> <span>Product 2</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="d-flex align-items-center">
                    <FaAngleRight size={20} /> <span>Product 3</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="d-flex align-items-center">
                    <FaAngleRight size={20} /> <span>Product 4</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="d-flex align-items-center">
                    <FaAngleRight size={20} /> <span>Product 5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 col-11 mx-auto">
            <div>
              <Heading as="h4" size="md" color="#009cff" letterSpacing="2px">
                NEWSLETTER
              </Heading>
              <Text fontSize="19px" my="5" pt="2" color="white">
                Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
                ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
                duo eirmod sea justo no lorem est diam
              </Text><br/>
              <form>
                <div className="d-flex">
                <Input placeholder="Your Email" size="lg" className="form-control" style={{background:"white",borderRadius:"0px"}}/>
                <Button colorScheme="#009cff" bg="#009cff" size="lg" borderRadius="0px">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
