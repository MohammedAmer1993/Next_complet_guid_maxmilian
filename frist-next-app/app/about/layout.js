import Link from "next/link";
export default function PageLayout({ children }) {
  return (
    <>
      <section>
        <nav>
          <ul>
            <li>history</li>
            <li>future</li>
            <li>promises</li>
          </ul>
        </nav>
      </section>
      {children}
      <button>
        <Link href="/">back</Link>
      </button>
    </>
  );
}
