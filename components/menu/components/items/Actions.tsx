import * as React from 'react';
import { Download, ThemePicker, LanguageSelector, EditModeSwitch } from '../items';

const Actions: React.FC = () => {
  return (
    <>
      <LanguageSelector />
      <ThemePicker />
      <Download />
      <EditModeSwitch />
    </>
  );
};

export default Actions;
