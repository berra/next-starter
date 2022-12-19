import { MakeOptional } from "../../helpers/typeHelpers";
import { CustomProperties } from "../../ui/styles/customPropertiesTypes";

export type BaseComponent = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | CustomProperties;
};

export type BaseComponentOptionalChildren = MakeOptional<
  BaseComponent,
  "children"
>;
