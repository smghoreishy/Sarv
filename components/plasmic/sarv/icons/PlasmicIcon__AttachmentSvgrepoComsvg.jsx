// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AttachmentSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-8 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 4v20a6 6 0 01-12 0V6a4 4 0 018 0v18a2 2 0 01-4 0V8H4v16a4 4 0 008 0V6A6 6 0 000 6v19c.493 3.945 3.921 7 8 7 4.079 0 7.507-3.055 8-7V4h-2"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default AttachmentSvgrepoComsvgIcon;
/* prettier-ignore-end */
