import { useReactToPrint } from 'react-to-print';
import { sectionRefStore } from '@/app/store';


const useDownload = () => {
    const { sectionRef } = sectionRefStore.getState();
    const handleDownload =
        useReactToPrint({
            content: () => sectionRef.current,
            documentTitle: 'Marcos Tulli CV',
        });


    return {
        sectionRef,
        handleDownload
    };
};

export default useDownload;