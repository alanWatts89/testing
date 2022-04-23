// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FigiftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FigiftIcon(props: FigiftIconProps) {
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
          "M20 12v10H4V12m18-5H2v5h20V7zM12 22V7m0 0h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7zm0 0H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z"
        }
        stroke={"#fff"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FigiftIcon;
/* prettier-ignore-end */
