import { IExperience } from "@/models/interfaces";

export interface IWorkExperience {
  _id: string;
  userId: string;
  experiences: IExperience[];
}
