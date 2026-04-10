import { ILoginParams, ILoginResponse } from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/auth';
const authService = {
  login: async ({ email, password }: ILoginParams): Promise<ILoginResponse> => {
    return DataProviderInstance.post(`${location}/login`, { email, password });
  },
};

export default authService;
