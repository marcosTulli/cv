// TODO: Use eslint vscode extension
"use client";
import Header from "@/app/components/Header";
import WorkExperience from "@/app/components/work-experience/WorkExperience";
import Qualifications from "./Qualifications";
import Info from './Info';

export default function Home() {
    return (
        <div className="cvContainer">
            <div className="left">
                <Header />
                <WorkExperience />
            </div>
            <div className="right">
                <Info />
                <Qualifications />
            </div>
        </div>
    );
}