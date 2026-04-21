import {
  IAddExperienceParams,
  IAddTaskParams,
  IDeleteExperienceParams,
  IDeleteTaskParams,
  IExperience,
  IGetWorkDataParams,
  IPatchActivePeriodParams,
  IPatchCompanyNameParams,
  IPatchInfoParams,
  IPatchTaskParams,
} from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/work-experience';
const workService = {
  getWorkData: async ({ lang, id }: IGetWorkDataParams): Promise<IExperience[]> => {
    return DataProviderInstance.get(`${location}/${lang}/${id}`);
  },
  addExperience: async ({
    userId,
    ...body
  }: IAddExperienceParams): Promise<{ _id: string; companyName: string }> => {
    return DataProviderInstance.post(
      `${location}/${userId}/experiences`,
      body as Record<string, unknown>,
    );
  },
  deleteExperience: async ({ userId, experienceId }: IDeleteExperienceParams) => {
    return DataProviderInstance.delete(`${location}/${userId}/experiences/${experienceId}`);
  },
  patchCompanyName: async ({ userId, experienceId, companyName }: IPatchCompanyNameParams) => {
    return DataProviderInstance.patch(
      `${location}/${userId}/experiences/${experienceId}/company-name`,
      { companyName },
    );
  },
  postActivePeriod: async ({
    userId,
    experienceId,
    startDate,
    endDate,
  }: IPatchActivePeriodParams) => {
    return DataProviderInstance.post(
      `${location}/${userId}/experiences/${experienceId}/active-period`,
      { startDate, endDate },
    );
  },
  patchActivePeriod: async ({
    userId,
    experienceId,
    startDate,
    endDate,
  }: IPatchActivePeriodParams) => {
    return DataProviderInstance.patch(
      `${location}/${userId}/experiences/${experienceId}/active-period`,
      { startDate, endDate },
    );
  },
  upsertInfo: async ({ userId, experienceId, lang, ...body }: IPatchInfoParams) => {
    try {
      return await DataProviderInstance.post(
        `${location}/${userId}/experiences/${experienceId}/info/${lang}`,
        body as Record<string, unknown>,
      );
    } catch (err: unknown) {
      const status = (err as { response?: { status?: number } })?.response?.status;
      if (status === 409) {
        return DataProviderInstance.patch(
          `${location}/${userId}/experiences/${experienceId}/info/${lang}`,
          body as Record<string, unknown>,
        );
      }
      throw err;
    }
  },
  addTask: async ({ userId, experienceId, lang, task }: IAddTaskParams) => {
    return DataProviderInstance.post(
      `${location}/${userId}/experiences/${experienceId}/info/${lang}/tasks`,
      { task },
    );
  },
  patchTask: async ({ userId, experienceId, lang, taskId, task }: IPatchTaskParams) => {
    return DataProviderInstance.patch(
      `${location}/${userId}/experiences/${experienceId}/info/${lang}/tasks/${taskId}`,
      { task },
    );
  },
  deleteTask: async ({ userId, experienceId, lang, taskId }: IDeleteTaskParams) => {
    return DataProviderInstance.delete(
      `${location}/${userId}/experiences/${experienceId}/info/${lang}/tasks/${taskId}`,
    );
  },
};

export default workService;
