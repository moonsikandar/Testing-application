import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalComp from "./Modal";

const Contact = () => {
  // const [customShow,setCustomShow]= useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(()=>{
  //   const closeWindow = e =>{
  //     if(e.path[0].tagName !== 'BUTTON'){
  //       setCustomShow(false)
  //     }
  //   }
  //   document.body.addEventListener('click',closeWindow)
  //   return ()=> document.body.removeEventListener('click',closeWindow)
  // },[])

  return (
    <div>
      <Button onClick={handleShow}>Open Modal</Button>
      <ModalComp onClose={handleClose}>
  
       {show && <div className="Modal-Dialog">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>

          
        </div>}

        {/* {customShow && <ModalComp showHandler={setCustomShow}/>}
 <Button variant="primary" onClick={handleShow}>
 Modal using bootstrap
</Button>
<Button className="my-3 mx-2" onClick={()=>{setCustomShow(true)}}>Modal without using Bootstrap</Button>  
<Modal show={show} onHide={handleClose}>
 <Modal.Header closeButton>
   <Modal.Title>Modal heading</Modal.Title>
 </Modal.Header>
 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button variant="primary" onClick={handleClose}>
     Save Changes
   </Button>
 </Modal.Footer>
</Modal> */}
      </ModalComp>
      
    </div>
  );
};

export default Contact;
