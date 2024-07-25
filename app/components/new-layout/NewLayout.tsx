import React from 'react';
import styles from './NewLayout.module.scss';
import Header from '../header/Header';
import WorkExperience from '../work-experience/WorkExperience';
import Qualifications from '../qualifications/Qualifications';
import Footer from '../footer/Footer';


const App = () => {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <main>
                <WorkExperience />
                <Qualifications />
            </main>
            <Footer />
        </div>
    );
};

export default App;
