import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toggle from '../toggle/Toggle';
import { useLanguage } from "@/app/contexts/LanguageContext";
import copy from "copy-to-clipboard";
import { CopyAlert } from '../info/CopyAlert';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CodeIcon from '@mui/icons-material/Code';


const url = process.env.NEXT_PUBLIC_URL || '';
export default function Dropdown() {
    const { lang, toggleLang, trans: strings } = useLanguage();
    const [displayCopyConfirmation, setDisplayCopyConfirmation] = React.useState<boolean>(true);
    const fileName = `${strings.cv}${lang}`;
    const filePath = `${url}${fileName}.pdf`;

    const handleCopy = (value: string, isCopied: boolean) => {
        copy(value);
        setDisplayCopyConfirmation(false);
        // setHoverItem((i) => i ? { ...i, isCopied } : i);
    };

    React.useEffect(() => {
        if (!displayCopyConfirmation) {
            setTimeout(() => { setDisplayCopyConfirmation(!displayCopyConfirmation); }, 800);
        }
    }, [displayCopyConfirmation]);


    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
                <MenuItem>
                    <Typography variant="body2" color="text.secondary">
                        <Toggle
                        // leftSideString={strings.en}
                        // rightSideString={strings.es}
                        // toggleFunc={toggleLang}
                        // lang={lang}
                        />
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemText>{strings.dropdownOptionsDownload}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        <a
                            title='Download'
                            // className={styles.download}
                            href={filePath}
                            // download={fileName}
                            target="_blank"
                        >
                            <FileDownloadIcon color='inherit' />
                        </a>
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemText>{strings.dropdownOptionsClone}</ListItemText>
                    <p
                        style={{ margin: '0' }}
                        hidden={displayCopyConfirmation}
                    >
                        <CopyAlert
                            display={displayCopyConfirmation}
                            string={""}
                        />
                    </p>
                    <CodeIcon
                        onClick={() => handleCopy(strings.projectRepo, true)} />
                </MenuItem>
            </MenuList>
        </Paper>
    );
}
