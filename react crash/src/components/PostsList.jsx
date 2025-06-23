import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import cls from "./PostsList.module.css";

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={cls.posts}>
          {posts.map((item, idx) => (
            <Post
              key={idx}
              id={item.id}
              author={item.author}
              body={item.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>there is no posts yet</h2>
          <p>create something new</p>
        </div>
      )}
    </>
  );
}
