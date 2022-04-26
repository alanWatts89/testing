// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Xmlid4StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Xmlid4StrokeIcon(props: Xmlid4StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 51"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.312 1.474c-.422 0-.77.334-.77.738v46.273c0 .404.348.738.77.738h48.376c.422 0 .77-.334.77-.738V2.212c0-.404-.348-.738-.77-.738H2.312zM0 2.212C0 .994 1.039 0 2.312 0h48.376C51.96 0 53 .994 53 2.212v46.273c0 1.218-1.039 2.212-2.312 2.212H2.312C1.04 50.697 0 49.703 0 48.485V2.212z"
        }
        fill={"#282E4D"}
      ></path>
    </svg>
  );
}

export default Xmlid4StrokeIcon;
/* prettier-ignore-end */
