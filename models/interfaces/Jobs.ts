import { IActivePeriod } from './index';
export interface IJobs {
  id: number;
  en: {
    position: string;
    activePeriod: IActivePeriod;
    companyName: string;
    comapnyUrl: string;
    companyLogo: string;
    tasks: string[];
  };
  es: {
    position: string;
    activePeriod: IActivePeriod;
    companyName: string;
    comapnyUrl: string;
    companyLogo: string;
    tasks: string[];
  };
}
