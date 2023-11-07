import { load } from "@2gis/mapgl";
import { useEffect } from "react";
import MapWrapper from "./MapWrapper";

export default function Map() {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [54.78782130341394, 32.05245062677451],
        zoom: 9,
        key: "",
      });
    });

    // Удаляем карту при размонтировании компонента
    return () => map && map.destroy();
  }, []);

  return (
    <div>
      <MapWrapper style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
