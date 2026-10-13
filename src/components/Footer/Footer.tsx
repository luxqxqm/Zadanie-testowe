import Container from "../Container/Container";
import { navLinks } from "../../CONSTANTS/constants";
import css from "./Footer.module.css";
import logo from "../../assets/logo-bookmark.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.inner}>
          <img className={css.logo} src={logo} alt="Bookmark" />

          <ul className={css.links}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className={css.social}>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
