import {
  IAddEducationParams,
  IDeleteEducationParams,
  IEducation,
  IGetEducationParams,
  IPatchUrlParams,
  IUpsertTranslationParams,
} from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/education';
const educationService = {
  getEducation: async ({ lang, id }: IGetEducationParams): Promise<IEducation[]> => {
    return DataProviderInstance.get(`${location}/${lang}/${id}`);
  },
  addEducation: async ({ userId, ...body }: IAddEducationParams): Promise<{ _id: string }> => {
    return DataProviderInstance.post(`${location}/${userId}`, body);
  },
  deleteEducation: async ({ userId, educationId }: IDeleteEducationParams) => {
    return DataProviderInstance.delete(`${location}/${userId}/${educationId}`);
  },
  upsertTranslation: async ({ userId, educationId, lang, ...body }: IUpsertTranslationParams) => {
    try {
      return await DataProviderInstance.post(
        `${location}/${userId}/${educationId}/translations/${lang}`,
        body,
      );
    } catch (err: unknown) {
      const status = (err as { response?: { status?: number } })?.response?.status;
      if (status === 409) {
        return DataProviderInstance.patch(
          `${location}/${userId}/${educationId}/translations/${lang}`,
          body,
        );
      }
      throw err;
    }
  },
  upsertUrl: async ({ userId, educationId, url }: IPatchUrlParams) => {
    try {
      return await DataProviderInstance.post(`${location}/${userId}/${educationId}/url`, { url });
    } catch (err: unknown) {
      const status = (err as { response?: { status?: number } })?.response?.status;
      if (status === 409) {
        return DataProviderInstance.patch(`${location}/${userId}/${educationId}/url`, { url });
      }
      throw err;
    }
  },
};

export default educationService;
