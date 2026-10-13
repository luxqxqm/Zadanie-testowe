import Container from "../Container/Container";
import Button from "../Button/Button";
import css from "./Download.module.css";
import chrome from "../../assets/logo-chrome.svg";
import firefox from "../../assets/logo-firefox.svg";
import opera from "../../assets/logo-opera.svg";

const browsers = [
  { name: "Chrome", version: 62, logo: chrome },
  { name: "Firefox", version: 55, logo: firefox },
  { name: "Opera", version: 46, logo: opera },
];

export default function Download() {
  return (
    <section className={css.download} id="download">
      <Container>
        <h2 className={css.title}>Download the extension</h2>
        <p className={css.text}>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <ul className={css.list}>
          {browsers.map((browser) => (
            <li className={css.card} key={browser.name}>
              <img
                className={css.logo}
                src={browser.logo}
                alt={browser.name}
              />
              <h3 className={css.name}>Add to {browser.name}</h3>
              <p className={css.version}>
                Minimum version {browser.version}
              </p>
              <div className={css.dots} />
              <Button>Add &amp; Install Extension</Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
