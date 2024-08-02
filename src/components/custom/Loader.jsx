import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Oval
        height={20}
        width={20}
        color="#fff"
        ariaLabel="loading"
        secondaryColor="#fff"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};

export default Loader;
