import { IIcon } from "@/types/generalType";
import React from "react";

function AirplaneHeaderFill({ width, height, color }: IIcon) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      focusable="false"
      data-prefix="fas"
      data-icon="plane-departure"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M484.6 62C502.6 52.8 522.6 48 542.8 48H600.2C627.2 48 645.9 74.95 636.4 100.2C618.2 148.9 582.1 188.9 535.6 212.2L262.8 348.6C258.3 350.8 253.4 352 248.4 352H110.7C101.4 352 92.5 347.9 86.42 340.8L13.34 255.6C6.562 247.7 9.019 235.5 18.33 230.8L50.49 214.8C59.05 210.5 69.06 210.2 77.8 214.1L135.1 239.1L234.6 189.7L87.64 95.2C77.21 88.49 78.05 72.98 89.14 67.43L135 44.48C150.1 36.52 169.5 35.55 186.1 41.8L381 114.9L484.6 62zM0 480C0 462.3 14.33 448 32 448H608C625.7 448 640 462.3 640 480C640 497.7 625.7 512 608 512H32C14.33 512 0 497.7 0 480z"
      ></path>
    </svg>
  );
}

export default AirplaneHeaderFill;
