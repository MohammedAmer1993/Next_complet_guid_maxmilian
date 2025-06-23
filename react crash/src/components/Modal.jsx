import cls from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
export default function Modal({ children }) {
  const navigate = useNavigate();
  function closeModalHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={cls.backdrop} onClick={closeModalHandler} />
      <dialog className={cls.modal} open>
        {children}
      </dialog>
    </>
  );
}
