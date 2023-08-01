'use client';
import * as React from 'react';
import Image from 'next/image';
import JobCard from './components/JobCard';
import './styles/style.scss';
import jobsData from './assets/jobs-data';
import skillsData from './assets/skills-data';
import educationData from './assets/education-data';
import { IStrings } from './models/strings';
import stringsEn from './loc/strings-en';
import stringsSp from './loc/strings-sp';

export enum Language {
  EN = 'en',
  SP = 'sp'
}

const icons = {
  width: 20,
  height: 20,
};
const getStringFile = (language: Language) => {
  switch (language) {
    case Language.EN:
      return stringsEn;
    case Language.SP:
      return stringsSp;
  }
};

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(Language.EN);
  const [fileName, setFilename] = React.useState<string>('CVEN');
  const fileURL = `http://localhost:3000/${fileName}.pdf`;
  const strings: IStrings = getStringFile(currentLanguage);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === Language.EN ? Language.SP : Language.EN);
    setFilename(fileName === 'CVEN' ? 'CVSP' : 'CVEN');
  };

  const handleDownloadClick = (url: string) => {
    fetch(url).then(res => res.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', `${fileName}.pdf`);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();

    });
  };

  return (
    <div className="cvContainer">
      <div className="leftSection">
        <div className="about">
          <h1 className="candidateName">{strings.candidateName}</h1>
          <h3 className="qualifications">{strings.candidateTitle}</h3>
          <p className="about">{strings.about}</p>
        </div>
        <div className="workExperience">
          <div className="sectionTitle">{strings.workExperience}</div>
          {jobsData.map(i => {
            return (
              <JobCard key={i.id} data={i} language={currentLanguage} />
            );
          })}
        </div>
      </div>
      <div className="rightSection">
        <div className="profile">
          <div className="profilePicture">
            <Image src="/profile-picture.jpg" alt="profile picture" width={300} height={300} />
          </div>
          <div className="contactInfo">
            <ul>
              <li>
                <Image src='/location.png' alt='location-icon' width={icons.width} height={icons.height} />
                <p>{strings.location}</p>
                <div>
                  <p>EN</p>
                  <label title="Switch Language" className="switch">
                    <input type="checkbox" onChange={toggleLanguage} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <p>SP</p>
              </li>
              <li>
                <Image src='/mail.png' alt='mail-icon' width={icons.width} height={icons.height} />
                <p>{strings.email}</p>
              </li>

              <li>
                <Image src='/telephone.png' alt='phone-icon' width={icons.width} height={icons.height} />
                <p>{strings.phone}</p>
              </li>

              <li>
                <div>
                  <Image src='/uk.png' alt='english' width={icons.width} height={icons.height} />
                  <p>{strings.english}</p>
                  <Image src='/spain.png' alt='spanish' width={icons.width} height={icons.height} />
                  <p>{strings.spanish}</p>
                </div>
              </li>
              <li>
                <div>
                  <a href={strings.linkedinURL} target="_blank" title={strings.linkedinURL}>
                    <Image src='/linkedin.png' alt='linkedin' width={icons.width} height={icons.height} />
                    <p>{strings.linkedin}</p>
                  </a>
                  <a href={strings.githubURL} target="_blank" title={strings.githubURL}>
                    <p>{strings.github}</p>
                  </a>
                  <button className='download' title="download" onClick={() => handleDownloadClick(fileURL)}>
                    <Image src='/download.png' alt='download' width={40} height={40} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="education">
          <div className="sectionTitle">{strings.education}</div>
          <div className="educationCard">
            <ul>
              {
                educationData.map(i => {
                  const education = currentLanguage === Language.SP ? i.sp : i.en;
                  return (
                    <li key={i.id}>
                      <div className="degree">{education.title}</div>
                      <p>{education.content}</p>
                    </li>
                  );
                })

              }
            </ul>
          </div>
        </div>

        <div className="skills">
          <div className="sectionTitle">{strings.skills}</div>
          <div className='skillsCard'>
            <ul>
              {skillsData.map(i => {
                return (
                  <li key={i.id}>
                    <div>
                      <Image src={i.url} alt={i.name} width={20} height={20} />
                      {
                        <p>{i.name}</p>
                      }
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

