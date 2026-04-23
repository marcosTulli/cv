import axios from 'axios';
import { ILoginParams, ILoginResponse } from '../models/interfaces';
import DataProviderInstance from './data-provider';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
const cvApiKey = process.env.NEXT_PUBLIC_API_KEY || '';
const location = '/auth';

const authService = {
  login: async ({ email, password }: ILoginParams): Promise<ILoginResponse> => {
    return DataProviderInstance.post(`${location}/login`, { email, password });
  },
  refresh: async (token: string): Promise<ILoginResponse> => {
    const response = await axios.post(
      `${baseUrl}${location}/refresh`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': cvApiKey,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  },
};

export default authService;
