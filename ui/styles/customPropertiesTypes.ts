type Prop = string | number;

export interface CustomProperties extends React.CSSProperties {
  "--space"?: Prop;
  "--grid-min-size"?: Prop;
  "--avatar-size"?: Prop;
  "--switcher-size"?: Prop;
  "--gutter"?: Prop;
}
