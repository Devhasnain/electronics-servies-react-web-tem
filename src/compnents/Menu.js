import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, IconButton, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { Link } from "react-scroll";
import "../CSS/menu.css"

function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = useState('left')
  
    return (
      <>
        <IconButton colorScheme="#009cff" onClick={onOpen} className="icon-button" borderRadius="0px" mr="3" icon={<ImMenu color="#22395d" size={30} />} />
        <Drawer placement={placement} onClose={onClose} colorScheme="#22395d" isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="#22395d">
            <DrawerHeader borderBottomWidth='2px' borderColor="#009cff" color="#009cff">Basic Drawer</DrawerHeader>
            <DrawerBody>
                <div className="sscreen-menu-link">
            <ul className="justify-content-end">
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="hero"
                  className="nav-link"
                  onClick={onClose}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="about"
                  className="nav-link"
                  onClick={onClose}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="services"
                  className="nav-link"
                  onClick={onClose}
                >
                  SERVICES
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="projects"
                  className="nav-link"
                  onClick={onClose}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="team"
                  className="nav-link"
                  onClick={onClose}
                >
                  TEAM
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={500}
                  to="contact"
                  className="nav-link"
                  onClick={onClose}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            </div>
            <Heading my="5" paddingBottom="4" borderBottom="2px" borderColor="#009cff" as="h2" size="md" color="#009cff" letterSpacing="3px" >FOLLOW US</Heading>
            <div className="d-flex my-4">
              <Box
                w="40px"
                mx="2"
                className="footer-icons"
                h="40px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="40px"
                mx="2"
                className="footer-icons"
                h="40px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="40px"
                mx="2"
                className="footer-icons"
                h="40px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
              <Box
                w="40px"
                mx="2"
                className="footer-icons"
                h="40px"
                p="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FaFacebook cursor="pointer" size={25} />
              </Box>
            </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Menu