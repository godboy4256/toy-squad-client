import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { ModalBackground, ModalContainer } from "./Modal.style";

type ModalPropsType = {
  content: string | ReactElement;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ content, setOpen, open }: ModalPropsType) => {
  return (
    <>
      {open && (
        <>
          <ModalBackground onClick={() => setOpen(false)} />
          <ModalContainer>{content}</ModalContainer>
        </>
      )}
    </>
  );
};

export default Modal;
