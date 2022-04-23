// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 26"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 23.166l1.48-3.438c1.598 1.195 3.727 1.816 5.828 1.816 1.55 0 2.532-.597 2.532-1.503-.023-2.532-9.29-.55-9.361-6.9-.024-3.225 2.84-5.71 6.9-5.71 2.414 0 4.823.598 6.545 1.959l-1.385 3.51c-1.575-1.006-3.533-1.722-5.397-1.722-1.266 0-2.1.597-2.1 1.36.023 2.486 9.36 1.125 9.455 7.19 0 3.296-2.793 5.615-6.805 5.615-2.94-.005-5.639-.697-7.692-2.177zm56.818-4.68a4.295 4.295 0 01-3.728 2.172 4.267 4.267 0 01-4.272-4.273 4.27 4.27 0 014.272-4.273 4.3 4.3 0 013.728 2.172l4.083-2.267c-1.527-2.722-4.467-4.586-7.81-4.586a8.96 8.96 0 00-8.959 8.959 8.96 8.96 0 008.958 8.958 8.904 8.904 0 007.811-4.586l-4.083-2.276zM16.55 0h5.112v25.006H16.55V0zm46.356 0v25.006h5.112v-7.502l6.066 7.502h6.544l-7.716-8.91 7.142-8.314h-6.26l-5.78 6.9V0h-5.108z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
