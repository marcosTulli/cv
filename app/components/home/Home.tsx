// TODO: Use eslint vscode extension
"use client";
import Header from "@/app/components/header/Header";
import WorkExperience from "@/app/components/work-experience/WorkExperience";
import Qualifications from "@/app/components/qualifications/Qualifications";
import Info from "@/app/components/info/Info";
import styles from './Home.module.scss';


export default function Home() {
    return (
        <div className={styles.cvContainer}>
            <div className={styles.left}>
                <Header />
                <WorkExperience />
            </div>
            <div className={styles.right}>
                <Info />
                <Qualifications />
            </div>
        </div>
    );
}