import * as React from "react";
import { Download, ThemePicker, LanguageSelector } from "../items";
import MenuContainer from "./MenuContainer";

const Actions: React.FC = () => {
  return (
    <MenuContainer>
      <LanguageSelector />
      <ThemePicker />
      <Download />
    </MenuContainer>
  );
};

export default Actions;
