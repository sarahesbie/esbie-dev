import React from "react";
import {
  avatar,
  skin,
  hair,
  glassesFrame,
  glassesLens,
  eye,
  smile,
  tshirt,
} from "./Avatar.module.scss";

const Avatar = () => (
  <svg
    className={avatar}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="100" fill="#E6E6E6" />
    {/* Head */}
    <circle cx="100" cy="90" r="50" className={skin} />
    {/* Hair */}
    <circle cx="70" cy="50" r="20" className={hair} />
    <circle cx="130" cy="50" r="20" className={hair} />
    <path d="M50 90 Q100 40, 150 90" className={hair} />
    <path d="M50 90 Q100 20, 150 90" className={hair} />
    {/* Glasses */}
    <rect
      x="60"
      y="70"
      width="30"
      height="20"
      rx="5"
      ry="5"
      className={glassesFrame}
    />
    <rect
      x="110"
      y="70"
      width="30"
      height="20"
      rx="5"
      ry="5"
      className={glassesFrame}
    />
    <line x1="90" y1="80" x2="110" y2="80" className={glassesFrame} />
    <rect
      x="60"
      y="70"
      width="30"
      height="20"
      rx="5"
      ry="5"
      className={glassesLens}
    />
    <rect
      x="110"
      y="70"
      width="30"
      height="20"
      rx="5"
      ry="5"
      className={glassesLens}
    />
    {/* Eyes */}
    <circle cx="75" cy="80" r="5" className={eye} />
    <circle cx="125" cy="80" r="5" className={eye} />
    {/* Smile */}
    <path d="M75 110 Q100 130, 125 110" className={smile} />
    {/* Tshirt */}
    <path d="M60 140 Q100 180, 140 140 Q130 170, 70 170 Z" className={tshirt} />
  </svg>
);

export default Avatar;
