import React, { RefObject } from 'react';
import { useReactToPrint } from 'react-to-print';
import { downloadRefStore } from '@/app/store';

const useDownload = () => {
    const { downloadRef } = downloadRefStore.getState();
    const { setDownloadRef } = downloadRefStore();
    const printContent = () => {
        if (downloadRef && typeof downloadRef === 'object') {
            return (downloadRef as RefObject<HTMLDivElement>).current;
        }
        return null;
    };

    React.useEffect(() => {
        setDownloadRef(downloadRef);
        return () => { setDownloadRef(null); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDownload = useReactToPrint({
        content: printContent,
        documentTitle: 'Marcos Tulli CV',
    });
    return {
        downloadRef,
        handleDownload
    };
};

export default useDownload;