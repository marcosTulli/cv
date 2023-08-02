import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";
import Image from "next/image";
import * as utils from "@/app/utils/index";
import copy from "copy-to-clipboard";

const Header: React.FC = () => {
    const { lang, toggleLang, trans: strings } = useLanguage();

    return (
        <div className='headerContainer'>
            <div className="about">
                <div className='headerTitle'>
                    <h1 className="candidateName">{strings.candidateName}</h1>
                </div>
                <h3>{strings.candidateTitle}</h3>
                <p className="aboutText">{strings.about}</p>
            </div>
        </div>
    );
};

export default Header;