import {
  IGetUsersParams,
  INetworkResponse,
  IPatchNetworkParams,
  IUser,
} from '../models/interfaces';
import DataProviderInstance from './data-provider';

const location = '/users';
const userService = {
  getUsers: async (): Promise<IUser[]> => {
    return DataProviderInstance.get(location);
  },
  getUserById: async ({ lang, id }: IGetUsersParams): Promise<IUser> => {
    return DataProviderInstance.get(`${location}/${lang}/${id}`);
  },
  patchNetwork: async ({
    userId,
    name,
    display,
    url,
  }: IPatchNetworkParams): Promise<INetworkResponse> => {
    return DataProviderInstance.patch(`${location}/${userId}/network/${name}`, { display, url });
  },
};

export default userService;
