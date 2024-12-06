import * as React from 'react';
import { Download, ThemePicker, LanguageSelector } from '../items';

interface IActionProps {
    onClick?: () => void;
}


const Actions: React.FC<IActionProps> = ({ onClick }) => {
    return (
        <>
            <LanguageSelector onClick={onClick as () => void} />
            <ThemePicker onClick={onClick as () => void} />
            <Download onClick={onClick as () => void} />
        </>
    );
};

export default Actions;
