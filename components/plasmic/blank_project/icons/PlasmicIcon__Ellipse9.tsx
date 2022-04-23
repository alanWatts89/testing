// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse9Icon(props: Ellipse9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"30"} cy={"30"} r={"30"} fill={"#F7954E"}></circle>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
