import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      <h1>Container App</h1>
      <hr />
      {/* Mounting the MarketingApp component which is a micro-frontend */}
      <MarketingApp />
    </div>
  );
};