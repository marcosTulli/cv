import { ILanguage } from '@/models/interfaces';

export interface IUserInfo {
  candidateTitle: string;
  about: string;
  languages: ILanguage[];
}
