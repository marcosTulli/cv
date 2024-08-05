import React from 'react';
import styles from './NavBar.module.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useScroll from '@/app/components/nav-bar/hooks/useScroll';
import { Sections } from '@/app/models/enums';
import { useLanguage } from '@/app/hooks';
import { PrintableTemplate } from '../pdf-version/PrintableTemplate';
import { useReactToPrint } from 'react-to-print';

const NavBar: React.FC = () => {
    const { scroll } = useScroll();
    const { strings } = useLanguage();
    const sections = Object.keys(Sections).filter((i) => i !== Sections.Header);
    const documentRef = React.useRef(null);

    const handleDownload = useReactToPrint({
        content: () => documentRef.current,
        documentTitle: `Testing`,
    });

    return (
        <div className={styles.navContainer}>
            <HomeOutlinedIcon
                className={styles.navSection}
                onClick={() => scroll(Sections.Header)}
            />
            {sections.map((section, index) => {
                return (
                    <div
                        key={index}
                        className={styles.navSection}
                        onClick={() => scroll(section)}
                    >
                        {section}
                    </div>
                );
            })}
            <div
                className={styles.navSection}
                onClick={handleDownload}
            >
                {strings.dropdownOptionsDownload}
            </div>
            <PrintableTemplate
                ref={documentRef}

            />
        </div>
    );
};

export default NavBar;