import React from 'react';
import styles from './Toggle.module.scss';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ToggleProps {
}

const Toggle: React.FC<ToggleProps> = () => {
    const { isChecked, toggleLang, trans: strings } = useLanguage();

    return (
        <div className={styles.toggleLanguage} style={{ margin: '0', padding: '0' }}>
            <div>{strings.en}</div>
            <label title="Switch Language" className={styles.toggle}  >
                <input type="checkbox" onChange={toggleLang} defaultChecked={isChecked} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <div>{strings.es}</div>
        </div>
    );
};

export default Toggle;