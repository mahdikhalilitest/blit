import { IIcon } from "@/types/generalType";
import React from "react";

function TaxiStroke({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="car"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M80 288C80 270.3 94.33 256 112 256C129.7 256 144 270.3 144 288C144 305.7 129.7 320 112 320C94.33 320 80 305.7 80 288zM432 288C432 305.7 417.7 320 400 320C382.3 320 368 305.7 368 288C368 270.3 382.3 256 400 256C417.7 256 432 270.3 432 288zM48.1 188.8L82.35 90.93C94.7 55.63 128 32 165.4 32H346.6C383.1 32 417.3 55.63 429.7 90.93L463.9 188.8C492.6 205.4 512 236.4 512 272V456C512 469.3 501.3 480 488 480C474.7 480 464 469.3 464 456V400H48V456C48 469.3 37.25 480 24 480C10.75 480 0 469.3 0 456V272C0 236.4 19.35 205.4 48.1 188.8V188.8zM103.4 176H408.6L384.3 106.8C378.7 90.74 363.6 80 346.6 80H165.4C148.4 80 133.3 90.74 127.7 106.8L103.4 176zM416 224H96C69.49 224 48 245.5 48 272V352H464V272C464 245.5 442.5 224 416 224z"
      ></path>
    </svg>
  );
}

export default TaxiStroke;
