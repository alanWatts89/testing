// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1Icon(props: Group1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 27"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.117 0v18.307c0 6.521-3.686 8.518-7.99 8.518-3.132 0-5.8-1.664-7.127-4.092l2.822-1.887c.645 1.628 2.114 2.86 4.292 2.86 2.861 0 4.446-1.38 4.446-5.695V0h3.557zM40.52 13.4c0 7.73-4.15 13.438-13.133 13.438h-9.86V0h9.847c8.686 0 13.145 5.732 13.145 13.4zm-3.944.037c0-5.77-2.514-10.293-9.24-10.293h-5.878v20.538h5.877c6.843 0 9.24-4.253 9.24-10.245z"
        }
        fill={"#282E4D"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
