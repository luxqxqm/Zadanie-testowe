import Container from "../Container/Container";
import Button from "../Button/Button";
import css from "./Hero.module.css";
import heroImage from "../../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <section className={css.hero} id="hero">
      <Container>
        <div className={css.inner}>
          <img className={css.image} src={heroImage} alt="Bookmark app" />

          <div>
            <h1 className={css.title}>A Simple Bookmark Manager</h1>
            <p className={css.text}>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className={css.buttons}>
              <Button>Get it on Chrome</Button>
              <button className={css.second} type="button">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
