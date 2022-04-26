// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1Icon(props: Rectangle1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 226 62"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h226v62H0V0z"} fill={"#282E4D"}></path>
    </svg>
  );
}

export default Rectangle1Icon;
/* prettier-ignore-end */
