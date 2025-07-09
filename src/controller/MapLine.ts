import Polyline from "@arcgis/core/geometry/Polyline";
import Graphic from "@arcgis/core/Graphic";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Color from "@arcgis/core/Color";
import GetFeederServices from "../services/GetFeederService";

export default async function MapLine(
  graphicsMVconLayer: any,
  jobID: string,
): Promise<Graphic[]> {
  const markerSymbol = new SimpleLineSymbol({
    color: new Color("red"),
    width: 2
  });

  const lineGraphics: Graphic[] = [];

  try {
    const res = await GetFeederServices.GetFeederServices.GetFeeder(jobID);
    if (res.data.value.features) {
      res.data.value.features.forEach((feature: any) => {
        if (feature.geometry?.paths) {
          const linePath = feature.geometry.paths[0];
          const line = new Polyline({
            hasZ: false,
            hasM: true,
            paths: linePath,
            spatialReference: { wkid: 4326 },
          });

          const lineGraphic = new Graphic({
            geometry: line,
            symbol: markerSymbol,
            popupTemplate: {
              title: "Equipment Details",
              content: `Feeder : ${feature.properties.FEEDERID} <br> ชนิดของสาย : ${feature.properties.CONDUCTORSIZE}`,
            },
          });
          graphicsMVconLayer.add(lineGraphic);
          lineGraphics.push(lineGraphic);
        }
      });
    }
  } catch (error) {
    console.error("Error fetching feeder data:", error);
  }

  return lineGraphics;
}