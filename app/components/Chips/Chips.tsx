import classNames from "classnames";
import { BaseComponent, BaseComponentOptionalChildren } from "../types";
import styles from "./chip.module.scss";

type ChipsProps = BaseComponentOptionalChildren & {
  list: string[];
  getKeyFn?: (item: any) => string;
};

export default function Chips({
  list,
  className,
  style,
  getKeyFn = getKey,
}: ChipsProps) {
  const cl = classNames(className, "[ cluster ]", `[ ${styles.chips} ]`);

  return (
    <div className={cl} style={style}>
      {list.map((item) => {
        return <Chip key={getKeyFn(item)}>{item}</Chip>;
      })}
    </div>
  );
}

export function Chip({ children, className, style }: BaseComponent) {
  return (
    <span className={classNames(className)} style={style}>
      {children}
    </span>
  );
}

const getKey = (item: any) => String(item);
