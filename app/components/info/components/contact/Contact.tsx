'use client';
import * as React from 'react';
import styles from './Contact.module.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { userStore } from '@/app/store';
import { Box, Tooltip } from '@mui/material';
import copy from "copy-to-clipboard";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IContactProps {
    isLoading: boolean;
}
const Contact: React.FC<IContactProps> = ({ isLoading }) => {
    const { user } = userStore();
    const tooltipDefault = 'Click to copy';
    const [tooltipTitle, setTooltipTitle] = React.useState<string>(tooltipDefault);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCopy = (event: any) => {
        const value = event.target.innerText;
        copy(value);
        setTooltipTitle(`${value} copied to clipboard!`);
    };

    const resetTooltip = () => {
        setTooltipTitle(tooltipDefault);

    };

    return (
        <Box
            sx={{ color: 'secondary.main' }}
            className={styles.contactInfoContainer}>
            {
                isLoading
                    ? <Box>
                        <Box className={styles.contact}>
                            <Skeleton className={styles.icon} height={24} width={24} />
                            <Skeleton height={14} width={150} />
                        </Box>
                        <Box className={styles.contact}>
                            <Skeleton className={styles.icon} height={24} width={24} />
                            <Skeleton height={14} width={220} />
                        </Box>

                    </Box>
                    : <Box>

                        <Tooltip
                            title={tooltipTitle}
                            TransitionProps={{ timeout: 500 }}
                        >
                            <Box
                                onClick={handleCopy}
                                onMouseOut={resetTooltip}
                                className={styles.contact}>
                                <LocalPhoneOutlinedIcon
                                    className={styles.icon}
                                />
                                <Box>{user.phone}</Box>
                            </Box>

                        </Tooltip>
                        <Tooltip
                            title={tooltipTitle}
                            TransitionProps={{ timeout: 500 }}
                        >
                            <Box
                                className={styles.contact}
                                onClick={handleCopy}
                                onMouseOut={resetTooltip}
                            >
                                <EmailOutlinedIcon
                                    className={styles.icon}
                                />
                                <Box>{user.email}</Box>
                            </Box>

                        </Tooltip>
                    </Box>

            }

        </Box>
    );

};

export default Contact;