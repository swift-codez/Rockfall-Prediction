
import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import SiteModal from '../components/SiteModal';
import { mockApiResponse } from '../mockApi';

const Dashboard = () => {
  const [mapData, setMapData] = useState({ map: '', sites: {} });
  const [selectedSite, setSelectedSite] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setMapData(mockApiResponse);
        setIsLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  const handleSiteClick = (siteName, siteData) => {
    setSelectedSite({ name: siteName, data: siteData });
  };

  const handleCloseModal = () => {
    setSelectedSite(null);
  };

  if (isLoading) {
    return <div className="loading-text">Loading Mine Data...</div>;
  }

  return (
    <>
      <Map 
        mapUrl={mapData.map}
        sites={mapData.sites}
        onSiteClick={handleSiteClick}
      />
      <SiteModal 
        site={selectedSite}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Dashboard;
