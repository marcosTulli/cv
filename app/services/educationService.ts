
import { IEducation, IGetEducationParams } from "../models/interfaces";
import DataProviderInstance from "./data-provider";

const location = '/education';
const educationService = {
    getEducation: async ({ lang, id }: IGetEducationParams): Promise<IEducation[]> => {
        return DataProviderInstance.get(`${location}/${lang}/${id}`);
    }
};

export default educationService;