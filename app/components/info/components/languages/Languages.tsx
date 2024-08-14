import * as React from 'react';
import styles from './Languages.module.scss';
import { userStore } from '@/app/store';
import Language from './Language';
import { Container } from '@mui/material';

const Languages = ({ }) => {
    const { user } = userStore();

    return (
        <Container className={styles.languageContainer}>
            <div>
                {
                    user.info.languages?.map((i) => {
                        return (
                            <Language key={i.language} language={i} />
                        );
                    })
                }
            </div>
        </Container>

    );
};

export default Languages;