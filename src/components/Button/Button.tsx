import type { ReactNode } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  red?: boolean;
}

export default function Button({ children, type = "button", red }: ButtonProps) {
  return (
    <button className={`${css.button} ${red ? css.red : css.blue}`} type={type}>
      {children}
    </button>
  );
}
