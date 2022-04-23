// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 18"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.113 11.107c-.74 1.218-2.267 2.124-3.989 2.124a4.267 4.267 0 01-4.273-4.273 4.27 4.27 0 014.273-4.273c1.722 0 3.249.954 3.989 2.196v4.226zm0-10.747v2.03C12.278.982 10.2 0 8.024 0 3.533 0 0 3.965 0 8.935c0 4.97 3.533 8.981 8.024 8.981 2.172 0 4.25-.976 5.089-2.39v2.03h5.112V.36h-5.112z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
