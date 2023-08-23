import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material';
import Typography from '@mui/material/Typography';
import Toggle from '../toggle/Toggle';
import { useLanguage } from "@/app/contexts/LanguageContext";
import copy from "copy-to-clipboard";
import { CopyAlert } from '../info/CopyAlert';
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
    const { lang, trans: strings } = useLanguage();
    const [displayCopyConfirmation, setDisplayCopyConfirmation] = React.useState<boolean>(true);
    const fileName = `${strings.cv}${lang}`;
    const filePath = `${url}${fileName}.pdf`;
    const isMobile = useMediaQuery('(max-width: 500px)');

    const handleCopy = (value: string, isCopied: boolean) => {
        copy(value);
        setDisplayCopyConfirmation(false);
    };

    React.useEffect(() => {
        if (!displayCopyConfirmation) {
            setTimeout(() => { setDisplayCopyConfirmation(!displayCopyConfirmation); }, 800);
        }
    }, [displayCopyConfirmation]);


    return (
        <Paper sx={{ width: 'auto' }}>
            <MenuList className={styles.menu}>
                <MenuItem className={styles.menuItem}>
                    {
                        isMobile ? (
                            <>
                                <ListItemText >

                                    <Toggle />
                                </ListItemText>
                                <CloseIcon onClick={() => { handleClose && handleClose(); }} />
                            </>

                        ) : (<Toggle />)
                    }
                </MenuItem>
                <Divider />

                <a
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                    title='Download'
                    href={filePath}
                    target="_blank"
                >
                    <MenuItem className={styles.menuItem}>
                        <ListItemText className={styles.textItem}  >{strings.dropdownOptionsDownload}</ListItemText>
                        <FileDownloadIcon color='inherit' />
                    </MenuItem>
                    <Divider />
                </a>
                <MenuItem
                    onClick={() => handleCopy(strings.projectRepo, true)}
                    className={styles.menuItem}
                >
                    <ListItemText
                        className={styles.textItem}>{strings.dropdownOptionsClone}</ListItemText>
                    <p
                        style={{ paddingRight: '10px', margin: '0' }}
                        hidden={displayCopyConfirmation}
                    >
                        <CopyAlert
                            display={displayCopyConfirmation}
                            string={""}
                        />
                    </p>
                    <CodeIcon
                    />
                </MenuItem>
            </MenuList>
        </Paper >
    );
};

export default Dropdown;