import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>this is the main page</h1>
        <Link href="/about">about</Link>
        <Link href="/momo">Routes</Link>
      </main>
    </div>
  );
}
