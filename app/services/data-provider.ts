import axios, { AxiosRequestConfig } from 'axios';
import { IUser, IWorkExperience, IEducation, ISkillsResponse, IGetEducationParams, IGetSkillsParams, IGetUsersParams, IGetWorkDataParams, TAxiosGetParams, IGetIconParams } from '../models';

const key = process.env.NEXT_PUBLIC_API_KEY || '';
const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
const localServer = 'http://localhost:3001';

class DataProvider {
    jsonHeaders: Record<string, string> = {
        "Content-Type": "application/json;charset=UTF-8",
        "x-api-key": `${key}`,
    };
    blobHeaders: Record<string, string> = {
        "Content-Type": "image/png",
        "x-api-key": `${key}`,
    };

    public async get<T>(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(baseUrl + path, {
            ...options, params,
            paramsSerializer: {
                encode: (params: TAxiosGetParams) => {
                    return params;
                }
            }, headers: this.jsonHeaders
        });
        return response.data;
    }

    public async getCdn(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<Blob> {
        const response = await axios.get<Blob>(localServer + path, {
            ...options,
            params,
            responseType: 'blob',
            paramsSerializer: {
                encode: (params: IGetIconParams) => {
                    return params;
                }
            }, headers: this.blobHeaders
        });
        return response.data as Blob;
    }

    public getUsers = async (): Promise<IUser[]> => {
        return this.get(`/users`);
    };

    public getUserById = async ({ lang, id }: IGetUsersParams): Promise<IUser> => {
        return this.get(`/users/${lang}/${id}`);
    };

    public getWorkData = async ({ lang, id }: IGetWorkDataParams): Promise<IWorkExperience> => {
        return this.get(`/work-experience/${lang}/${id}`);
    };

    public getEducation = async ({ lang, id }: IGetEducationParams): Promise<IEducation[]> => {
        return this.get(`/education/${lang}/${id}`);
    };

    public getSkills = async ({ id }: IGetSkillsParams): Promise<ISkillsResponse> => {
        return this.get(`/skills/${id}`);
    };

    public getIcon = async ({ iconName }: IGetIconParams): Promise<Blob> => {
        return this.getCdn(`/icons/${iconName}`);
    };

}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;