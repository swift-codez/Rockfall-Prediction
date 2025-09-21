
import React from 'react';

const PageContent = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h1>{title}</h1>
    <p>This is a placeholder page. Content will be added here.</p>
  </div>
);

const Settings = () => <PageContent title="Settings" />;

export default Settings;
