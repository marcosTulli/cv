import React from 'react';
import styles from './Switch.module.scss';

interface ToggleProps {
    leftSideString: string;
    rightSideString: string;
    toggleFunc: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ leftSideString, rightSideString, toggleFunc }) => {
    return (
        <div className={styles.toggleLanguage}>
            <p>{leftSideString}</p>
            <label title="Switch Language" >
                <input type="checkbox" onChange={() => toggleFunc()} className={styles.slider} />
                <span className="slider round"></span>
            </label>
            <p>{rightSideString}</p>
        </div>
    );
};

export default Toggle;