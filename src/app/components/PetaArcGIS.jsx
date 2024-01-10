"use client"

// pages/index.js
import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const PetaArcGIS = () => {
  const initMap = async () => {
    try {
      const [
        esriConfig,
        WebMap,
        MapView,
        ScaleBar,
        Legend,
        LayerList, // Import LayerList module
      ] = await loadModules([
        'esri/config',
        'esri/WebMap',
        'esri/views/MapView',
        'esri/widgets/ScaleBar',
        'esri/widgets/Legend',
        'esri/widgets/LayerList', // Add LayerList to the list
      ]);

      // Set the API key
      esriConfig.apiKey =
        'AAPKca075d6f572f4dca93e2ca65ab5d9e82cYUJxP885KUznqys4px8KMYgYyn7Nahp7QHA2a51OgRP2pKs-wyM_hR1dl7OU0-f';

      // Load additional styles for widgets
      await loadModules(['esri/widgets/support/widget', 'esri/widgets/Widget'], {
        css: 'https://js.arcgis.com/4.27/esri/widgets/support/widget.css'
      });

      // Load webmap
      const webmap = new WebMap({
        portalItem: {
          id: '5599e6326a52467cb9a3fe32908d6ab3'
        }
      });

      // Create a MapView
      const view = new MapView({
        container: 'viewDiv',
        map: webmap
      });

      // Add ScaleBar
      const scalebar = new ScaleBar({
        view: view
      });
      view.ui.add(scalebar, 'bottom-left');

      // Add Legend
      const legend = new Legend({
        view: view
      });
      view.ui.add(legend, 'top-right');

      // Add LayerList
      const layerList = new LayerList({
        view: view,
      });
      view.ui.add(layerList, 'bottom-right'); // Add LayerList widget to the top-right corner
      
    } catch (error) {
      console.error('Error loading ArcGIS modules:', error);
    }
  };

  useEffect(() => {
    initMap();
  }, []);

  return <div id="viewDiv" className='w-[100vwx] h-[100vh]' />;
};

export default PetaArcGIS;
