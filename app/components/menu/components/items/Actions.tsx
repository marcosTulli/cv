import * as React from 'react';
import { Download, ThemePicker, LanguageSelector } from '../items';
import useSideBar from '../../hooks/useSidebar';


const Actions: React.FC = () => {
    const { isSideBarOpen, toggleSideBar } = useSideBar();

    const toggle = () => { isSideBarOpen && toggleSideBar(); };

    return (
        <>
            <LanguageSelector onClick={toggle} />
            <ThemePicker onClick={toggle} />
            <Download onClick={toggle} />
        </>
    );
};

export default Actions;
