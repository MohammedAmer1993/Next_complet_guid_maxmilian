import cls from "./Modal.module.css";
export default function Modal({ children }) {
  return (
    <>
      <div className={cls.backdrop} />
      <dialog className={cls.modal} open>
        {children}
      </dialog>
    </>
  );
}
