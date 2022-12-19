import classNames from "classnames";
import { BaseComponent } from "../types";
import styles from "./avatar.module.scss";

export default function Avatar({ style, className, children }: BaseComponent) {
  return (
    <div
      style={style}
      className={classNames(className, `[ ${styles.avatar} ]`)}
    >
      {children}
    </div>
  );
}
