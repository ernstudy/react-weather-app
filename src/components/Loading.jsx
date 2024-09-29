import React from "react";
import loadingGif from "../assets/images/loading.gif";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">
        <img src={loadingGif} alt="loading" />
      </div>
    </div>
  );
}
