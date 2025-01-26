import { Language } from "@/models/enums";
import { ISocial, IUserInfo } from "@/models/interfaces";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  location: string;
  availableLanguages: Language[];
  cvs: Record<string, string>[];
  network: ISocial;
  info: IUserInfo;
}
