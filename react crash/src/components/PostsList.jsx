import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";
import cls from "./PostsList.module.css";

export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function authorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function bodyChange(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost onAuthorChange={authorChange} onBodyChange={bodyChange} />
      </Modal>
      <ul className={cls.posts}>
        <Post auther={enteredAuthor} content={enteredBody} />
        <Post auther="Max" content="I produced so many courses in cs" />
      </ul>
      ;
    </>
  );
}
