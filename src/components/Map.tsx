import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
// import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
// import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/assets/esri/themes/light/main.css";
// import { Zoom } from "@mui/material";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

interface Props {
  stations: {
  id: number;
  subThai:string;
  subEng:string;
  loadForcast:number;
  capacityMW: number;
  totalMW:number;
  lat: number;
  lon: number;
  year: number; // เพิ่มปี
  updateDate:string;
  zone:string;
  }[];
  selectedStationId:number| undefined;
}

const MapComponent: React.FC<Props> = ({ stations,selectedStationId }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {


    if (!mapRef.current) return;

    const graphicsLayer = new GraphicsLayer();
    const markerSymbol = new SimpleMarkerSymbol({
      color: [255, 0, 0, 1], // แดง, รูปแบบ [R, G, B, Alpha]
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    });
    const map = new Map({
      basemap: "osm",
    //   layers: [edLayer],
    });
    map.add(graphicsLayer);

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [101.16234854358595,13.004724687494289],
      zoom: 8,
    });

    // ใช้ PictureMarkerSymbol
    if (selectedStationId===undefined){
    stations.forEach((station) => {
      const point = {
        type: "point" as const,
        longitude: station.lon,
        latitude: station.lat,
      };

    //   const symbol = new PictureMarkerSymbol({
    //     url: "/assets/power-plant.png", // เส้นทางไปยังไฟล์ไอคอน
    //     width: "24px",
    //     height: "24px",
    //   });

      const graphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: {
          subEng: station.subEng,
          subThai: station.subThai,
          capacity: station.capacityMW,
          year: station.year,
        },
        popupTemplate: {
          title: "{subEng}",
          content: "ชื่อสถานีไฟฟ้า : {subThai}<br/> capacity คงเหลือ (MW): {capacity} MW<br/>ปี: {year}",
        },
      });

      graphicsLayer.add(graphic);
    });
}else{
    const station =stations.filter((s)=>s.id===selectedStationId)[0];
    const point = {
        type: "point" as const,
        longitude: station.lon,
        latitude: station.lat,
      };
    const zoomPoint=new Point({longitude: station.lon,
        latitude: station.lat}
)
    view.when(() => {
    view.goTo({
        target: zoomPoint,
        zoom: 12,
    });
    });
    //   const symbol = {
    //     type: "picture-marker",
    //     url: "/assets/power-plant.png", // เส้นทางไปยังไฟล์ไอคอน
    //     width: "24px",
    //     height: "24px",
    //   };
    // const symbol = new PictureMarkerSymbol({
    //   url: "https://developers.arcgis.com/javascript/latest/sample-code/symbols-pictures/live/airport.png",
    //   width: "24px",
    //   height: "24px",
    // });
      const graphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: {
          subEng: station.subEng,
          subThai: station.subThai,
          capacity: station.capacityMW,
          year: station.year,
        },
        popupTemplate: {
          title: "{subEng}",
          content: "ชื่อสถานีไฟฟ้า : {subThai}<br/> capacity คงเหลือ (MW): {capacity} MW<br/>ปี: {year}",
        },
      });

      graphicsLayer.add(graphic);


    }

  }, [stations,selectedStationId]);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

export default MapComponent;