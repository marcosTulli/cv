import React from 'react';
import styles from './Toggle.module.scss';
// import { useLanguage } from '@/app/contexts/LanguageContext';
import { useLanguage } from '@/app/hooks';

interface ToggleProps {
}

const Toggle: React.FC<ToggleProps> = () => {
    const { strings } = useLanguage();

    return (
        <div className={styles.toggleLanguage} style={{ margin: '0', padding: '0', fontSize: '15px' }}>
            <div>{strings.en}</div>
            <label title="Switch Language" className={styles.toggle}  >
                <input id="1" type="checkbox" onChange={() => { console.log('WIP'); }} defaultChecked={false} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <div>{strings.es}</div>
        </div>
    );
};

export default Toggle;