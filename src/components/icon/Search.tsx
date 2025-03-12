import { IIcon } from "@/types/generalType";
import React from "react";

function Search({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      data-v-a0a6a819=""
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="magnifying-glass"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"
      ></path>
    </svg>
  );
}

export default Search;
