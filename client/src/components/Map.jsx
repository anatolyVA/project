import { load } from "@2gis/mapgl";
import { useEffect } from "react";
import MapWrapper from "./MapWrapper";
import "./style.css";

export default function Map() {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [54.78782130341394, 32.05245062677451],
        zoom: 13,
        key: "5aefc340-8c74-4047-ab92-dbb80efe4d8c",
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
