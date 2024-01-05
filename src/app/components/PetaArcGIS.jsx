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
          Editor
        ] = await loadModules([
          'esri/config',
          'esri/WebMap',
          'esri/views/MapView',
          'esri/widgets/ScaleBar',
          'esri/widgets/Legend',
        ]);

        // Set the API key
        esriConfig.apiKey =
          'AAPK520d32df90914204917ac2d13163ddf5yHGdXED-1zrPeefPkoWRWITVsRjNsT4Wu4XJvKLdyOHXAu4fjo4iUUQoHpGBrTqX';

        // Load additional styles for widgets
        await loadModules(['esri/widgets/support/widget', 'esri/widgets/Widget'], {
          css: 'https://js.arcgis.com/4.27/esri/widgets/support/widget.css'
        });

        // Load webmap
        const webmap = new WebMap({
          portalItem: {
            id: 'b30dd78f3530473a868b700ebe918517'
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
      } catch (error) {
        console.error('Error loading ArcGIS modules:', error);
      }
    };

    useEffect(()=>{
      initMap();
    }, []);

  return <div id="viewDiv" className='w-[100vwx] h-[100vh]' />;
};

export default PetaArcGIS;