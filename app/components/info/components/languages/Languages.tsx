import * as React from 'react';
import styles from './Languages.module.scss';
import { userStore } from '@/app/store';
import Language from './Language';
import { Container } from '@mui/material';

const Languages = ({ }) => {
    const { user } = userStore();

    return (
        <Container className={styles.languageContainer}>
            {
                user.info.languages?.map((i) => {
                    return (
                        <Language key={i.language} language={i} />
                    );
                })
            }
        </Container>

    );
};

export default Languages;