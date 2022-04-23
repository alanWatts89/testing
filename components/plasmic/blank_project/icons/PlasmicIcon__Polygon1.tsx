// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon1Icon(props: Polygon1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 5"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M3.205 0L5.98 4.807H.43L3.204 0z"} fill={"#2FE6C8"}></path>
    </svg>
  );
}

export default Polygon1Icon;
/* prettier-ignore-end */
