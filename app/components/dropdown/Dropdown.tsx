'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import Toggle from '../toggle/Toggle';
import { useLanguage } from '@/app/hooks';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CodeIcon from '@mui/icons-material/Code';
import styles from './Dropdown.module.scss';
import { Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';


interface IDropdownMenuProps {
    handleClose?: () => void;
}

const url = process.env.NEXT_PUBLIC_URL || '';

const Dropdown: React.FC<IDropdownMenuProps> = ({ handleClose }) => {
    const { currentLanguage, strings } = useLanguage();
    const [displayCopyConfirmation, setDisplayCopyConfirmation] = React.useState<boolean>(true);
    const fileName = `${strings.cv}${currentLanguage}`;
    const filePath = `${url}${fileName}.pdf`;
    const isMobile = useMediaQuery('(max-width: 500px)');

    React.useEffect(() => {
        if (!displayCopyConfirmation) {
            setTimeout(() => { setDisplayCopyConfirmation(!displayCopyConfirmation); }, 800);
        }
    }, [displayCopyConfirmation]);

    const menuItems = [
        // { name: 'toggle', text: '', href: '', icon: <LanguageSelector /> },
        { name: 'download', href: filePath, text: strings.dropdownOptionsDownload, icon: <FileDownloadIcon /> },
        { name: 'repo', href: strings.projectRepo, text: strings.dropdownOptionsClone, icon: <CodeIcon /> },
    ];

    return (
        <Paper className={styles.menu} sx={{ width: 'auto' }} style={{ backgroundColor: isMobile ? '#ffdb58' : 'null' }}>
            <MenuList style={{ padding: '0' }} >
                {menuItems.map((item, index) => (
                    <div>
                        <div key={index} className={styles.menuItem}>
                            {item.name === 'toggle' && (
                                <div>
                                    {isMobile && (
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingRight: '3rem' }}>
                                            <ListItemText>
                                                {item.icon}
                                            </ListItemText>
                                            <CloseIcon onClick={() => { handleClose && handleClose(); }} />
                                        </div>
                                    )}

                                    {!isMobile && item.icon}
                                </div>
                            )}
                            <div>
                                <ListItemText className={styles.textItem} >
                                    {item.name !== 'toggle' && (
                                        <a style={{ textDecoration: 'none', color: 'black' }} title='Download' href={item.href} target="_blank">
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', paddingRight: '3rem', marginLeft: '0', paddingLeft: '0' }}>
                                                {item.text}
                                                {item.icon}
                                            </div>
                                        </a>
                                    )}
                                </ListItemText>
                            </div>
                        </div>
                        {
                            (index !== menuItems.length - 1) &&
                            <Divider />
                        }
                    </div>
                ))}

            </MenuList>
        </Paper>
    );
};


export default Dropdown;