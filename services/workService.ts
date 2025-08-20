import { IExperience, IGetWorkDataParams } from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/work-experience';
const workService = {
  getWorkData: async ({
    lang,
    id,
  }: IGetWorkDataParams): Promise<IExperience[]> => {
    return DataProviderInstance.get(`${location}/${lang}/${id}`);
  },
};

export default workService;
