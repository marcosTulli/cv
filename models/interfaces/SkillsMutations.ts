export interface IAddSkillParams {
  userId: string;
  name: string;
  formattedName: string;
}

export interface IPatchSkillParams {
  userId: string;
  skillId: string;
  name?: string;
  formattedName?: string;
}

export interface IDeleteSkillParams {
  userId: string;
  skillId: string;
}
