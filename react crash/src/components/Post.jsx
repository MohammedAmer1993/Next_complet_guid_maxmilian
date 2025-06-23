import cls from "./Post.module.css";
import { Link } from "react-router-dom";
export default function Post({ id, author, body }) {
  return (
    <Link to={id}>
      <li className={cls.post}>
        <h2 className={cls.auther}>{author}</h2>
        <p className={cls.text}>{body}</p>
      </li>
    </Link>
  );
}
