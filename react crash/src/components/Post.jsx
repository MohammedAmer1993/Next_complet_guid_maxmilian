import cls from "./Post.module.css";
export default function Post(props) {
  return (
    <li className={cls.post}>
      <h2 className={cls.auther}>{props.auther}</h2>
      <p className={cls.text}>{props.content}</p>
    </li>
  );
}
