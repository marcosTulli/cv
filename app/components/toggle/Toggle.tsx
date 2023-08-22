import React from 'react';
import styles from './Toggle.module.scss';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ToggleProps {
}

const Toggle: React.FC<ToggleProps> = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();
    return (
        <div className={styles.toggleLanguage}>
            <div>{strings.en}</div>
            <label title="Switch Language" className={styles.toggle}  >
                <input type="checkbox" onChange={toggleLang} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <div>{strings.es}</div>
        </div>
    );
};

export default Toggle;