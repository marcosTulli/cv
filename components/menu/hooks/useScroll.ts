import { sectionRefStore } from '@/store';

const useScroll = () => {
  const scroll = (sectionName: string) => {
    const { sectionRef } = sectionRefStore.getState();
    const targetElement = sectionRef[sectionName];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    scroll,
  };
};

export default useScroll;
