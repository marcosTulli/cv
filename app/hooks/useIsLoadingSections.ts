import { useState, useEffect } from 'react';
import { sectionsLoadingStateStore, } from '../store';
import { TLoadingState } from '../models/types';

interface IUseIsLoadingSections {
    sectionName: keyof TLoadingState;
    isLoading: boolean;
}

const useIsLoadingSections = () => {
    const { sectionsLoadingState, setSectionsLoadingState } = sectionsLoadingStateStore();
    const [isLoadingSections, setIsLoadingSections] = useState(true);

    useEffect(() => {
        const allSectionsLoading = Object.values(sectionsLoadingState).every(
            (section) => section[Object.keys(section)[0] as keyof TLoadingState]
        );
        setIsLoadingSections(allSectionsLoading);
    }, [sectionsLoadingState]);

    const handleLoad = ({ sectionName, isLoading }: IUseIsLoadingSections) => {
        if (sectionName) {
            setSectionsLoadingState(sectionName, isLoading);
        }
    };

    return { isLoadingSections, handleLoad };
};

export default useIsLoadingSections;