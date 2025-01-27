
import { IGetSkillsParams, ISkillsResponse } from "../models/interfaces";
import DataProviderInstance from "./data-provider";

const location = '/skills';
const skillsService = {

    getSkills: async ({ id }: IGetSkillsParams): Promise<ISkillsResponse> => {
        return DataProviderInstance.get(`${location}/${id}`);
    }
};

export default skillsService;