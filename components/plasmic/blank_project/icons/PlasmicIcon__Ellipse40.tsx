// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse40Icon(props: Ellipse40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"25.593"}
        cy={"25.593"}
        r={"25.593"}
        fill={"#C4C4C4"}
      ></circle>
    </svg>
  );
}

export default Ellipse40Icon;
/* prettier-ignore-end */
