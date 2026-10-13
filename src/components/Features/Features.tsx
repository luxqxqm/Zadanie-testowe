import { useState } from "react";
import Container from "../Container/Container";
import Button from "../Button/Button";
import css from "./Features.module.css";
import tab1 from "../../assets/illustration-features-tab-1.svg";
import tab2 from "../../assets/illustration-features-tab-2.svg";
import tab3 from "../../assets/illustration-features-tab-3.svg";
export default function Features() {
  const tabs: FeatureTab[] = [
    {
      label: "Simple Bookmarking",
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: tab1,
    },
    {
      label: "Speedy Searching",
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: tab2,
    },
    {
      label: "Easy Sharing",
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: tab3,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const { title, text, image } = tabs[activeTab];

  interface FeatureTab {
    label: string;
    title: string;
    text: string;
    image?: string;
  }

  return (
    <section className={css.features} id="features">
      <Container>
        <h2 className={css.title}>Features</h2>
        <p className={css.text}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div className={css.tabs} role="tablist">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={index === activeTab}
              className={`${css.tab} ${index === activeTab ? css.active : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={css.content}>
          <div className={css.imageWrap}>
            <img className={css.image} src={image} alt={title} />
          </div>
          <div className={css.info}>
            <h3 className={css.infoTitle}>{title}</h3>
            <p className={css.infoText}>{text}</p>
            <Button>More Info</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
