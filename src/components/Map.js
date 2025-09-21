
import React from 'react';
import './Map.css';

const getRiskColor = (probability) => {
  if (probability > 0.7) return 'red';
  if (probability > 0.3) return 'yellow';
  return 'green';
};

const Map = ({ mapUrl, sites, onSiteClick }) => {
  return (
    <div 
      className="map-container"
      style={{ backgroundImage: `url(${mapUrl})` }}
    >
      {Object.entries(sites).map(([siteName, siteData]) => {
        const lastHistoryValue = siteData.history[siteData.history.length - 1];
        const color = getRiskColor(lastHistoryValue);

        return (
          <button 
            key={siteName}
            className="site-marker"
            style={{
              left: siteData.x,
              top: siteData.y,
              backgroundColor: color,
            }}
            onClick={() => onSiteClick(siteName, siteData)}
          >
            {siteName}
          </button>
        );
      })}
    </div>
  );
};

export default Map;
