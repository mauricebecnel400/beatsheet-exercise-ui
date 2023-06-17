import React from "react";
import ReactDOM from "react-dom";

import {  ModalOverlay, ModalWrapper } from './Modal.styled';


export const Modal = ({ show, children }) => show ? ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </ModalOverlay>,
  document.getElementById('modal-root')
) : null;

export default Modal;