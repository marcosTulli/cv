import React from 'react';
import { useLanguage } from "@/app/contexts/LanguageContext";

const Header: React.FC = () => {
    const { trans: strings } = useLanguage();

    return (
        <div className='headerContainer'>
            <div className="about">
                <h1 className="candidateName">{strings.candidateName}</h1>
                <h3>{strings.candidateTitle}</h3>
                <p className="aboutText">{strings.about}</p>
            </div>
        </div>
    );
};

export default Header;