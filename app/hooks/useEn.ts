import { Translation } from "@/app/models";
import { userStore } from "../store";

const useEN = () => {
    const { user } = userStore();
    const En: Translation = {
        candidateName: user.name,
        candidateTitle: user.info.candidateTitle,
        about: user.info.about.en,
        workExperience: "Work Experience",
        education: "Education & Certifications",
        skills: "Skills",
        agile: 'Agile Methodologies',
        english: user.info.languages.en[0].level,
        spanish: user.info.languages.en[1].level,
        email: user.email,
        phone: user.info.phone,
        location: user.info.location,
        linkedin: user.info.social.linkedin.display,
        github: user.info.social.github.display,
        linkedinURL: user.info.social.linkedin.url,
        githubURL: user.info.social.linkedin.url,
        projectRepo: 'https://github.com/marcosTulli/cv.git',
        cv: 'Marcos Tulli CV-',
        en: 'EN',
        es: 'ES',
        englishCertificate: "https://www.efset.org/cert/WcpTzU",
        azureCertificate: "https://www.credly.com/badges/5d54f43d-768f-4d3f-89d8-8fcb3678c89e",
        dropdownOptionsDownload: 'Download CV',
        dropdownOptionsClone: 'View code',
    };

    return En;
};



export default useEN;



