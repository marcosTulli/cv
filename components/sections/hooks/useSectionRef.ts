import { sectionRefStore } from '@/store';
import * as React from 'react';
import { Sections } from '@/models/enums';

const useSectionRef = ({ sectionName }: { sectionName: Sections }) => {
  const sectionRef = React.useRef(null);
  const { setSection } = sectionRefStore();

  React.useEffect(() => {
    setSection(sectionName, sectionRef.current);
    return () => {
      setSection(sectionName, null);
    };
  }, []);
  return { sectionRef };
};

export default useSectionRef;
