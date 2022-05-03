import React from "react";
import Loader from "react-js-loader";
import "./../Styles/loading.css";

export const Loading = () => {
  return (
    <div className="ContainerLoader">
      <Loader type="spinner-cub" bgColor={"#fff"} size={120} />
    </div>
  );
};
