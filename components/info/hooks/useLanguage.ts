import { useIconKey, useIcons } from '@/hooks/queries';
import React from 'react';
import { ILanguageProps } from '../components/languages/Language';

const useLanguage = ({ language }: ILanguageProps) => {
  const [fileKey, setFileKey] = React.useState('');
  const { data: key } = useIconKey({ name: language.flag });
  const { data: icon } = useIcons({ fileKey });
  const iconLoaded = icon !== undefined;

  React.useEffect(() => {
    if (key) {
      setFileKey(key);
    }
  }, [key]);

  return { iconLoaded, icon };
};

export default useLanguage;
