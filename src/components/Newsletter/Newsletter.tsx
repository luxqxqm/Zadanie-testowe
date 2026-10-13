import { useState } from "react";
import type { FormEvent } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import css from "./Newsletter.module.css";
import errorIcon from "../../assets/icon-error.svg";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email.includes("@") && email.includes(".")) {
      setHasError(false);
      setEmail("");
    } else {
      setHasError(true);
    }
  }

  return (
    <section className={css.newsletter} id="contact">
      <Container>
        <p className={css.joined}>35,000+ already joined</p>
        <h2 className={css.title}>Stay up-to-date with what we’re doing</h2>

        <form className={css.form} onSubmit={handleSubmit} noValidate>
          <div className={css.field}>
            <input
              className={`${css.input} ${hasError ? css.inputError : ""}`}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {hasError && (
              <>
                <img className={css.icon} src={errorIcon} alt="" />
                <p className={css.error}>Whoops, make sure it’s an email</p>
              </>
            )}
          </div>
          <Button type="submit" red>
            Contact Us
          </Button>
        </form>
      </Container>
    </section>
  );
}
