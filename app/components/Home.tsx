// TODO: Use eslint vscode extension
"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import * as utils from "@/app/utils/index";
import Header from "@/app/components/Header";
import WorkExperience from "./WorkExperience";
import Qualifications from "./Qualifications";

export default function Home() {
    return (
        <div className="cvContainer">
            <Header />
            <div className="leftSection">
                <WorkExperience />
            </div>
            <div className="rightSection">
                <Qualifications />
            </div>
        </div>
    );
}