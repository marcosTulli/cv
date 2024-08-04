import { IExperienceInfo } from './index';

export interface IExperience {
    _id: string;
    comapnyUrl: string;
    activePeriod: string;
    companyName: string;
    companyLogo: string;
    info: IExperienceInfo;
}