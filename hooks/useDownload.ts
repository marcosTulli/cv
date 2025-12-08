'use client';
import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { downloadRefStore } from '@/store';

const useDownload = () => {
  const { downloadRef } = downloadRefStore.getState();
  const { setDownloadRef } = downloadRefStore();
  const printContent = () => {
    if (downloadRef && typeof downloadRef === 'object') {
      return downloadRef.current;
    }
    return null;
  };

  React.useEffect(() => {
    setDownloadRef(downloadRef);
    return () => {
      setDownloadRef(null);
    };
  }, []);

  const handleDownload = useReactToPrint({
    content: printContent,
    documentTitle: 'Marcos_Tulli_CV_2025',
  });
  return {
    downloadRef,
    handleDownload,
  };
};

export default useDownload;
