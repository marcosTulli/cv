
import { IGetSkillsParams, ISkills  } from "../models/interfaces";
import DataProviderInstance from "./data-provider";

const location = '/skills';
const skillsService = {

    getSkills: async ({ id }: IGetSkillsParams): Promise<ISkills[]> => {
        return DataProviderInstance.get(`${location}/${id}`);
    }
};

export default skillsService;