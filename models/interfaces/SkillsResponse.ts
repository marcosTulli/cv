import { ISkills } from '@/models/interfaces';

export interface ISkillsResponse {
  _id: string;
  userId: string;
  skills: ISkills[];
}
