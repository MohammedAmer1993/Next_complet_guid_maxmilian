import NewPost from "../components/NewPost";
import Modal from "../components/Modal";
import { redirect } from "react-router-dom";
export default function Create() {
  return (
    <>
      <Modal>
        <NewPost />
      </Modal>
    </>
  );
}

export async function postAction({ request }) {
  const data = await request.formData();
  const post = { author: data.get("author"), body: data.get("body") };
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
