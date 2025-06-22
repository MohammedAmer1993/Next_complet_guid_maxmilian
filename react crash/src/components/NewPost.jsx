import cls from "./NewPost.module.css";
export default function NewPost({ onAuthorChange, onBodyChange }) {
  return (
    <form className={cls.form}>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <textarea id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
}
