'use client';
import * as React from 'react';
import styles from './Languages.module.scss';
import { userStore } from '@/app/store';
import Language from './Language';

const Languages = ({ }) => {
    const { user } = userStore();

    return (
        <div className={styles.languageContainer}>
            <div>
                {
                    user.info.languages?.map((i) => {
                        return (
                            <Language key={i.language} language={i} />

                        );
                    })
                }
            </div>
        </div>
    );
};

export default Languages;