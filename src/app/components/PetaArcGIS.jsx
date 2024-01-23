"use client";

import { useEffect, useState } from "react";
import { loadModules } from "esri-loader";
import { TbMapSearch } from "react-icons/tb";

const PetaArcGIS = () => {
  const [isLegend, setIsLegend] = useState(true);

  const toggleLegend = () => {
    setIsLegend(!isLegend);
    console.log(isLegend);
  };

  const initMap = async () => {
    try {
      const [esriConfig, WebMap, MapView, ScaleBar, Legend, LayerList] =
        await loadModules([
          "esri/config",
          "esri/WebMap",
          "esri/views/MapView",
          "esri/widgets/ScaleBar",
          "esri/widgets/Legend",
          "esri/widgets/LayerList",
        ]);

      // Set the API key
      esriConfig.apiKey =
        "AAPKca075d6f572f4dca93e2ca65ab5d9e82cYUJxP885KUznqys4px8KMYgYyn7Nahp7QHA2a51OgRP2pKs-wyM_hR1dl7OU0-f";

      // Load additional styles for widgets
      await loadModules(
        ["esri/widgets/support/widget", "esri/widgets/Widget"],
        {
          css: "https://js.arcgis.com/4.27/esri/widgets/support/widget.css",
        }
      );

      // Load webmap
      const webmap = new WebMap({
        portalItem: {
          id: "f3f426905a964dfd8b2ae73756fce077",
        },
      });

      // Create a MapView
      const view = new MapView({
        container: "viewDiv",
        map: webmap,
      });

      // Add ScaleBar
      const scalebar = new ScaleBar({
        view: view,
      });
      view.ui.add(scalebar, "bottom-right");

      // Add Legend
      if(isLegend){
        const legend = new Legend({
          view: view,
        });
        view.ui.add(legend, "top-right");
      }

      // Add LayerList
      const layerList = new LayerList({
        view: view,
      });
      view.ui.add(layerList, "bottom-left");
    } catch (error) {
      console.error("Error loading ArcGIS modules:", error);
    }
  };

  useEffect(() => {
    initMap();
  }, [isLegend]);

  return (
    <div className="flex flex-col bg-white">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleLegend(); 
        }}
        className="bg-slate-300 hover:bg-slate-400 hidden md:block md:text-[14px] xl:text-[18px] font-semibold w-[100px] h-[20px] md:w-[140px] md:h-[25px]  xl:w-[180px] xl:h-[30px] text-center rounded-md self-end left-1 bottom-1 md:left-16 md:top-4 xl:left-20 xl:top-4 z-50 absolute"
      >
        Legenda
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleLegend(); 
        }}
        className="bg-slate-300 hover:bg-slate-400 md:hidden font-semibold w-[30px] h-[30px] flex items-center justify-center rounded-md top-[90px] left-4  z-50 absolute"
      >
        <TbMapSearch className="w-5 h-5" />
      </button>

      <div id="viewDiv" className="w-[100vwx] h-[100vh]" />
    </div>
  );
};

export default PetaArcGIS;
