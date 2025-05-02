import React, { useState, useContext, createContext } from "react";

export const CaptionDataContext = createContext();
const CaptionContext = ({ children }) => {
  const [caption, setCaption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaption = (captionData) => {
    setCaption(captionData);
  };

  const value = {
    caption,
    setCaption,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaption,
  };

  return (
    <div>
      <CaptionDataContext.Provider value={value}>
        {children}
      </CaptionDataContext.Provider>
    </div>
  );
};

export default CaptionContext;
