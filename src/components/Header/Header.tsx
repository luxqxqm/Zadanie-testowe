import { useState } from "react";
import Container from "../Container/Container";
import { navLinks } from "../../CONSTANTS/constants";
import css from "./Header.module.css";
import logo from "../../assets/logo-bookmark.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${css.header} ${isOpen ? css.open : ""}`}>
      <Container>
        <div className={css.inner}>
          <a href="/">
            <img className={css.logo} src={logo} alt="Bookmark" />
          </a>

          <button
            className={css.burger}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={isOpen ? close : hamburger} alt="Menu" />
          </button>

          <nav
            className={`${css.menu} ${isOpen ? css.show : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <a className={css.login} href="#">
              Login
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
