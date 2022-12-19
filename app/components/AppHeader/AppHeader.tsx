import classNames from "classnames";
import { BaseComponent } from "../types";
import styles from "./appHeader.module.scss";

export default function AppHeader(props: BaseComponent) {
  return (
    <header
      className={classNames(
        "[ cluster ] [ p-s-300 ]",
        props.className,
        `[ ${styles.header} ]`
      )}
    >
      {props.children}
    </header>
  );
}
