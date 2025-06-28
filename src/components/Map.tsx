import React, { useEffect, useMemo, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import Station from "../models/Stations";
import Measurement from "@arcgis/core/widgets/Measurement";
import Toggle from "@arcgis/core/widgets/BasemapToggle";
import GetJobIdServices from "../services/GetJobIdService";
import MapLine from "../controller/MapLine";
import GetTraceStatus from "../services/GetTraceStatus";
import PurpleLightningLoader from "./PurpleLightningLoader";
import { Backdrop, CircularProgress } from "@mui/material";
import LegendBox from "./LegendBox";


interface Props {
  stations: Station[];
  selectedStationId: number | undefined;
  setSelectionID: (selectedStationId: number | undefined) => void;
}

const MapComponent: React.FC<Props> = ({ stations, selectedStationId, setSelectionID }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const map = useMemo(() => new Map({ basemap: "osm" }), []);
  const graphicsLayer = useMemo(() => new GraphicsLayer(), []);
  const graphicsMVconLayer = useMemo(() => new GraphicsLayer(), []);
  const [loading, setLoading] = useState(true);

  const view = useMemo(
    () =>
      new MapView({
        map: map,
        center: [101.16234854358595, 13.004724687494289],
        zoom: 8,
      }),
    []
  );
  const toggle = new Toggle({
    view: view,
    nextBasemap: "hybrid",
  });
  const measurement = new Measurement({
    view: view
  });

  const getDistance = () => {
    measurement.activeTool = "distance";
  };
  const clearDistance = () => {
    measurement.clear();
  };

  const Trace115 = async (lat: number, lon: number) => {
    try {
      const res = await GetJobIdServices.GetJobIdServices.getJobId(lat, lon);
      if (res.data.jobId) {
        const jobID = res.data.jobId;

        for (let i = 0; i < 10; i++) {
          console.log("checking status...", loading);

          const res2 = await GetTraceStatus.GetTraceStatus(jobID);
          if (res2.data.jobStatus === 'esriJobSucceeded') {
            console.log("สำเร็จแล้ว:", res2.data);
            return res2.data; // ✅ คืนค่าทันทีเมื่อสำเร็จ
          }

          console.log(`รอบที่ ${i + 1}, status:`, res2.data.jobStatus);
          await new Promise(resolve => setTimeout(resolve, 2000)); // 🕒 รอ 2 วิ
        }

        console.warn("รอครบ 10 รอบแล้วยังไม่สำเร็จ");
      } else {
        console.warn("ไม่พบ jobId");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }

    return null; // ❌ กรณีล้มเหลวทั้งหมด
  }

  useEffect(() => {
    if (!mapRef.current) return;

    view.container = mapRef.current;

    view.ui.add(toggle, "bottom-right");

    // ✅ เพิ่ม toolbar เข้า ArcGIS UI
    if (toolbarRef.current) {
      view.ui.add(toolbarRef.current, "top-left");
    }
  }, []);

  useEffect(() => {
    const run = async () => {
      graphicsLayer.removeAll();
      graphicsMVconLayer.removeAll();
      map.add(graphicsLayer);
      map.add(graphicsMVconLayer);

      setLoading(true); // ✅ เริ่มโหลด

      if (selectedStationId === undefined) {
        stations.forEach((station) => {
          const point = {
            type: "point" as const,
            longitude: station.lon,
            latitude: station.lat,
          };
          let color: number[];

          if (station.capacityMW > 200) {
            color = [0, 200, 0, 0.8]; // สีเขียว
          } else if (station.capacityMW >= 50) {
            color = [255, 204, 0, 0.8]; // สีเหลือง
          } else {
            color = [255, 0, 0, 0.8]; // สีแดง
          }

          const squareSymbol = new SimpleMarkerSymbol({
            style: "square",
            color: color,
            size: 8,
            outline: { color: [0, 0, 0], width: 1 },
          });

          const graphic = new Graphic({
            geometry: point,
            symbol: squareSymbol,
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
      } else {
        const station = stations.find((s) => s.id === selectedStationId);
        if (station) {
          if (station.lon === 0) {
            alert("ไม่พบข้อมูลใน GIS");
          } else {
            const result = await Trace115(station.lat, station.lon);
            if (result?.jobId) {
              await MapLine(graphicsMVconLayer, result.jobId); // ⏳ รอวาดเส้นให้เสร็จ
            }

            const zoomPoint = new Point({
              longitude: station.lon,
              latitude: station.lat,
            });

            await view.when(); // ✅ รอ view พร้อม
            await view.goTo({ target: zoomPoint, zoom: 12 });

            setSelectionID(undefined);
          }
        }
      }

      setLoading(false); // ✅ จบการโหลดเมื่อทุกอย่างเสร็จจริง
    };

    run();
  }, [stations, selectedStationId]);

  return (

    <>
      <Backdrop
        open={loading}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ พื้นหลังโปร่งดำ
        }}
      >
        <PurpleLightningLoader />
      </Backdrop>
      <div ref={mapRef} style={{ position: "relative", width: "100%", height: "80vh" }}>
        {/* ✅ Toolbar ต้องอยู่นอก view ภายใน ref */}
        <div ref={toolbarRef} className="esri-component esri-widget">
          <button
            className="esri-widget--button esri-interactive esri-icon-measure-line"
            title="Distance Measurement Tool"
            onClick={getDistance}
          ></button>
          <button
            className="esri-widget--button esri-interactive esri-icon-trash"
            title="Clear Measurements"
            onClick={clearDistance}
          ></button>
        </div>

        <LegendBox />
      </div>

    </>
  );
};

export default MapComponent;