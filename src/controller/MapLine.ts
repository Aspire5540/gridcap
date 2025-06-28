import Polyline from "@arcgis/core/geometry/Polyline";
import Graphic from "@arcgis/core/Graphic";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Color from "@arcgis/core/Color";
import GetFeederServices from "../services/GetFeederService";


export default async function MapLine(
  graphicsMVconLayer: any,
  jobID: string,
) {


  // const query = mvcon.createQuery();
  // query.where = "FEEDERID='" + feeder + "'";
  // query.outFields = ["*"];

  const markerSymbol = new SimpleLineSymbol({
    color: new Color("red"),
    width: 2
  });

  GetFeederServices.GetFeederServices.GetFeeder(jobID).then((res: any) => {
    if (res.data.value.features) {
      res.data.value.features[1].forEach((feature: any) => {
        if (typeof feature.geometry !== "undefined") {
          if (feature.geometry.paths) {
            let linePath = feature.geometry.paths[0];
            let line = new Polyline({
              hasZ: false,
              hasM: true,
              paths: linePath,
              spatialReference: { wkid: 4326 },
            });
            // console.log(linePath);
            let lineGraphic = new Graphic({
              geometry: line,
              symbol: markerSymbol,
              popupTemplate: {
                title: "Equipment Details",
                content: `Feeder : ${feature.properties.FEEDERID} <br> ชนิดของสาย : ${feature.properties.CONDUCTORSIZE}}`,

              },
            });
            graphicsMVconLayer.add(lineGraphic);
          };

        };
      });

    };
    
  });

}
