// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FiwifiOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FiwifiOffIcon(props: FiwifiOffIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 1l22 22m-11-3h.01m-3.48-3.89a6 6 0 016.95 0m1.24-5.05c.82.4 1.585.9 2.28 1.49m-14 0a10.94 10.94 0 015.17-2.39M1.42 9a15.91 15.91 0 014.7-2.88m4.59-1.07A16 16 0 0122.58 9"
        }
        stroke={"#fff"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FiwifiOffIcon;
/* prettier-ignore-end */
