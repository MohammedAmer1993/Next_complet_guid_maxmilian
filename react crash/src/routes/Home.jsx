import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function postsLoader() {
  const res = await fetch("http://localhost:8080/posts");
  const data = await res.json();
  return data.posts;
}
