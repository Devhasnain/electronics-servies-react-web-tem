import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react"
import { useContext } from "react";
import {IoMdCloudDone} from 'react-icons/io';
import { clientContext } from "./Contact";
function EmailSuccess({ isOpen, name, email, onClose }) {
    const {setClient}=useContext(clientContext);
    return (
      <>  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <div className="p-2 justify-content-center d-flex">
                <IoMdCloudDone size={60} color="green"/>
            </div>
            <div className="text-center">
            <ModalHeader p="0">{name}</ModalHeader>
            <ModalHeader>{email}</ModalHeader>
            <ModalCloseButton onClick={()=>{setClient({name:"",email:""})}}/>
            </div>
            <ModalBody>
                <p className="text-center mb-2">Your Email has sent Successfully!<br/>
                We will review it as soon as posible.<br/>Thank You!</p>
                
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default EmailSuccess;