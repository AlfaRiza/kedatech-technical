import { ReactNode, useEffect } from "react";
import ReactPortal from "../ReactPortal";

declare interface ModalInterface {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode
}

const Modal = ({ handleClose, isOpen, title, children }: ModalInterface) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className={`top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 fixed w-full h-full ease-in duration-300 ${!isOpen ? 'hidden': ''}`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="bg-white rounded-md w-96 h-96 px-5">
          <div className="flex justify-center py-2">
            <h3 className="text-2xl text-tersier font-bold">{ title }</h3>
          </div>
          {
            children
          }
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
