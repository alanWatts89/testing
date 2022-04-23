// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector337IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector337Icon(props: Vector337IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 12"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M4.792 10.953V1m0 0L1 4.792M4.792 1l3.791 3.792"}
        stroke={"#FDBC64"}
        strokeWidth={"1.896"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector337Icon;
/* prettier-ignore-end */
