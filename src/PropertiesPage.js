import React from 'react';
import PropertiesList from './PropertiesList';

const PropertiesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-4 mb-6 text-center">Available Properties</h1>
     <PropertiesList />
    </div>
  );
};

export default PropertiesPage;