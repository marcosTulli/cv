import * as React from "react";
import { Download, ThemePicker, LanguageSelector } from "../items";

const Actions: React.FC = () => {
  return (
    <>
      <LanguageSelector />
      <ThemePicker />
      <Download />
    </>
  );
};

export default Actions;
