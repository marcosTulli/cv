import React from 'react';
import styles from './Toggle.module.scss';

interface ToggleProps {
    leftSideString: string;
    rightSideString: string;
    toggleFunc: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ leftSideString, rightSideString, toggleFunc }) => {
    return (
        <div className={styles.toggleLanguage}>
            <p>{leftSideString}</p>
            <label title="Switch Language" className={styles.toggle}>
                <input type="checkbox" onChange={toggleFunc} />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <p>{rightSideString}</p>
        </div>
    );
};

export default Toggle;