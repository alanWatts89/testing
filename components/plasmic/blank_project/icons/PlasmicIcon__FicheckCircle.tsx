// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FicheckCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FicheckCircleIcon(props: FicheckCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M18.333 9.233V10a8.333 8.333 0 11-4.941-7.617"}
        stroke={"#fff"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.333 3.333L10 11.675l-2.5-2.5"}
        stroke={"#fff"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FicheckCircleIcon;
/* prettier-ignore-end */
