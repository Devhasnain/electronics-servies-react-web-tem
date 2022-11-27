import { Button, Heading, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { createContext, useRef, useState } from "react";
import EmailSuccess from './EmailSuccess';
import emailjs from '@emailjs/browser';
export const clientContext=createContext();
const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [client,setClient]=useState({name:"",email:""});
  const onChange=(e)=>{
    const {name,value}=e.target;
    setClient((pre)=>{return {...pre,[name]:value}})
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.EMAIL_SERVICES_ID, process.env.EMAIL_TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {
        onOpen();
        e.target.reset();
      }, (error) => {
        alert(error.text)
        e.target.reset();
      });
  };
  return (
   <> <div className="container-fluid contact-parent-div my-5 pt-2" id="contact">
      <div className="container">
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
                CONTACT
              </Heading>
              <Heading as="h5" size="2xl" letterSpacing="1px" color="#22395d">
                Get In Touch
              </Heading>
            </div>
          </div>
        </div>
        <br />
        <div className="row my-4">
          <div className="col-lg-8 mx-auto">
            <form  ref={form} onSubmit={sendEmail}>
              <div className="row  justify-content-between">
                <div className="col-lg-6 input-col col-md-6 col-sm-6 p-0">
                  <Input
                    placeholder="Your Name *"
                    color="gray.500"
                    className="form-control"
                    size="lg"
                    name="name"
                    required
                    type="text"
                    minLength={3}
                    value={client.name}
                    onChange={onChange}
                  />
                </div>
                <div className="col-lg-6 input-col col-md-6 col-sm-6 p-0">
                  <div className="d-flex justify-content-end">
                    <Input
                      placeholder="Your Email *"
                      className="form-control"
                      size="lg"
                      name="email"
                    required
                    type="email"
                    value={client.email}
                    onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col p-0">
                  <Input
                    placeholder="Submject *"
                    size="lg"
                    className="form-control subject-input"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col p-0">
                  <Textarea
                    placeholder="Message"
                    size="lg"
                    className="form-control"
                    rows={5}
                    name="message"
                    required
                    type="text"
                  />
                </div>
              </div><br/>
              <div className="row my-1"><div className="col text-center"><Button colorScheme="#009cff" type="submit" borderRadius="0px" color="white" letterSpacing="1px" bg="#009cff" size="lg">Send Message</Button></div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <clientContext.Provider value={{client,setClient}}>
<EmailSuccess isOpen={isOpen} onOpen={onOpen} name={client.name} email={client.email} onClose={onClose} />
    </clientContext.Provider>
</>
  );
};

export default Contact;
