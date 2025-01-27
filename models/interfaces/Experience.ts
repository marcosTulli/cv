import { IExperienceInfo, IActivePeriod } from './index';

export interface IExperience {
    _id: string;
    comapnyUrl: string;
    activePeriod: IActivePeriod;
    companyName: string;
    companyLogo: string;
    info: IExperienceInfo;
}