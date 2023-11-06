import React from "react";

const MapWrapper = React.memo(
  function Container() {
    return (
      <div id="map-container" style={{ width: "100vw", height: "100vh" }}></div>
    );
  },
  () => true
);

export default MapWrapper;
