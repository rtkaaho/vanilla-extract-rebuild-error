import React from "react";

import { atoms } from "../../sprinkles.css";

export const Button: React.FunctionComponent = () => {
  return (
    <button className={atoms({ backgroundColor: "red" })}>
      buttonasdasd
    </button>
  );
};

