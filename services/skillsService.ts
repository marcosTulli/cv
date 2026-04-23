import {
  IAddSkillParams,
  IDeleteSkillParams,
  IGetSkillsParams,
  IPatchSkillParams,
  ISkills,
} from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/skills';
const skillsService = {
  getSkills: async ({ id }: IGetSkillsParams): Promise<ISkills[]> => {
    return DataProviderInstance.get(`${location}/${id}`);
  },
  addSkill: async ({ userId, name, formattedName }: IAddSkillParams) => {
    return DataProviderInstance.post(`${location}/${userId}`, { name, formattedName });
  },
  patchSkill: async ({ userId, skillId, ...body }: IPatchSkillParams) => {
    return DataProviderInstance.patch(`${location}/${userId}/${skillId}`, body);
  },
  deleteSkill: async ({ userId, skillId }: IDeleteSkillParams) => {
    return DataProviderInstance.delete(`${location}/${userId}/${skillId}`);
  },
};

export default skillsService;
