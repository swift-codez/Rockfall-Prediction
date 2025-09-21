
import React from 'react';

const PageContent = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h1>{title}</h1>
    <p>This is a placeholder page. Content will be added here.</p>
  </div>
);

const Mode = () => <PageContent title="Mode" />;
const AlertSystem = () => <PageContent title="Alert System" />;
const Reports = () => <PageContent title="Reports" />;
const Settings = () => <PageContent title="Settings" />;

export { Mode, AlertSystem, Reports, Settings };
