import Link from "next/link";
export default function Route() {
  return (
    <main>
      <h2>this is routes</h2>
      <button>
        <Link href="/">back</Link>
      </button>
    </main>
  );
}
