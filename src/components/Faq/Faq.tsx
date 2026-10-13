import { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import css from "./Faq.module.css";

const questions = [
  "What is Bookmark?",
  "How can I request a new browser?",
  "Is there a mobile app?",
  "What about other Chromium browsers?",
];

const answer =
  "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className={css.faq} id="faq">
      <Container>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <p className={css.text}>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>

        <ul className={css.list}>
          {questions.map((question, index) => (
            <li className={css.item} key={question}>
              <button
                type="button"
                className={`${css.question} ${
                  openIndex === index ? css.open : ""
                }`}
                onClick={() => toggle(index)}
              >
                <span>{question}</span>
                <svg
                  className={css.arrow}
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                >
                  <path
                    d="M1 1l8 8 8-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </button>
              {openIndex === index && <p className={css.answer}>{answer}</p>}
            </li>
          ))}
        </ul>

        <div className={css.more}>
          <Button>More Info</Button>
        </div>
      </Container>
    </section>
  );
}
