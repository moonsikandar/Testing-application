import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import  ReactDOM  from 'react-dom';
const Backdrop = (props)=>{
// console.log(props.onClose)
    return <div onClick={props.onClose}/>
}

const ModalOverlay = (props)=> {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    )
}

const ModalComp = (props) => {

  const portalElement = document.getElementById('overlay')
    return (
      <div>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement )}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}


        {/* <h3>modal example</h3>
        <p>do you want to continue or just cancel it out</p>
        <Button className="mx-2" onClick={()=>{props.showHandler(false)}}>Close</Button>
        <Button>Continue</Button> */}
      </div>
    );
}

export default ModalComp