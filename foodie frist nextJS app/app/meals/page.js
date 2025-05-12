import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delisious meals created by you
          <span className={classes.highlight}> by you</span>.
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is fun and easy
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
