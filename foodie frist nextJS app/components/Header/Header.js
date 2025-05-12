import Link from "next/link";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import classes from "./Header.module.css";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="table with food covering it" priority />
          NextLevel Foodie
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community Foodies</NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
