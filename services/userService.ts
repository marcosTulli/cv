import { IGetUsersParams, IUser } from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/users';
const userService = {
  getUsers: async (): Promise<IUser[]> => {
    return DataProviderInstance.get(location);
  },
  getUserById: async ({ lang, id }: IGetUsersParams): Promise<IUser> => {
    return DataProviderInstance.get(`${location}/${lang}/${id}`);
  },
};

export default userService;
