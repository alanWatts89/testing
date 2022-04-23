// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 30"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.331 18.965a3.15 3.15 0 01-3.154 3.153 3.152 3.152 0 01-3.153-3.153 3.152 3.152 0 013.153-3.154h3.154v3.154zm1.574 0a3.15 3.15 0 013.154-3.154 3.15 3.15 0 013.154 3.154v7.881A3.15 3.15 0 0111.059 30a3.15 3.15 0 01-3.154-3.154v-7.881zM11.06 6.307a3.15 3.15 0 01-3.155-3.153A3.15 3.15 0 0111.06 0a3.15 3.15 0 013.154 3.154v3.153H11.06zm0 1.598a3.15 3.15 0 013.153 3.154 3.15 3.15 0 01-3.154 3.154H3.154A3.152 3.152 0 010 11.059a3.152 3.152 0 013.154-3.154h7.905zm12.633 3.155a3.15 3.15 0 013.153-3.155A3.15 3.15 0 0130 11.06a3.15 3.15 0 01-3.154 3.154h-3.153V11.06zm-1.575 0a3.15 3.15 0 01-3.153 3.153 3.15 3.15 0 01-3.154-3.154V3.154A3.15 3.15 0 0118.965 0a3.15 3.15 0 013.153 3.154v7.905zm-3.153 12.633a3.15 3.15 0 013.153 3.153A3.15 3.15 0 0118.965 30a3.15 3.15 0 01-3.154-3.154v-3.153h3.154zm0-1.575a3.15 3.15 0 01-3.154-3.153 3.15 3.15 0 013.154-3.154h7.905a3.15 3.15 0 013.154 3.154 3.15 3.15 0 01-3.154 3.153h-7.905z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
