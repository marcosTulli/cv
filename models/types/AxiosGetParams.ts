import {
  IGetEducationParams,
  IGetUsersParams,
  IGetWorkDataParams,
  IGetSkillsParams,
} from '../interfaces';

export type TAxiosGetParams =
  | IGetEducationParams
  | IGetUsersParams
  | IGetWorkDataParams
  | IGetSkillsParams;
