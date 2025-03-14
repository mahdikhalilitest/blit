import { IIcon } from "@/types/generalType";
import React from "react";

function OfferLogo({ width, height, color }: IIcon) {
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="tag"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-v-a0a6a819=""
    >
      <path
        fill={color}
        d="M80 144C80 126.3 94.33 112 112 112C129.7 112 144 126.3 144 144C144 161.7 129.7 176 112 176C94.33 176 80 161.7 80 144zM197.5 32C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L197.5 32zM52.69 240.8L228.7 416.8C234.9 423.1 245.1 423.1 251.3 416.8L384.8 283.3C391.1 277.1 391.1 266.9 384.8 260.7L208.8 84.69C205.8 81.69 201.7 80 197.5 80H48V229.5C48 233.7 49.69 237.8 52.69 240.8L52.69 240.8z"
      ></path>
    </svg>
  );
}

export default OfferLogo;
