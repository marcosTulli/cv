
import { ISkills } from "@/app/models/interfaces";

export interface ISkillsResponse {
    _id: string,
    userId: string,
    skills: ISkills[];
}