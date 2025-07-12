import React from 'react';

const LoadingSpinner = ({ message = "Loading data..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600 text-lg font-medium">{message}</p>
      <div className="mt-2 text-sm text-gray-500">Please wait while we fetch the data...</div>
    </div>
  );
};

export default LoadingSpinner; 