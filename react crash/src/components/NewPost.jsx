import { Link, Form } from "react-router-dom";
import cls from "./NewPost.module.css";

export default function NewPost() {
  return (
    <Form action="/create" className={cls.form} method="post">
      <p>
        <label htmlFor="author">Text</label>
        <textarea id="author" name="author" required rows={3} />
      </p>
      <p>
        <label htmlFor="body">body</label>
        <textarea id="body" name="body" required />
      </p>
      <p className={cls.actions}>
        <Link to=".." type="button" onClick={oncancel}>
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
  );
}
