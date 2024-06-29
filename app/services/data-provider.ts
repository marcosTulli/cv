import axios, { AxiosRequestConfig } from 'axios';
import { IUser, IWorkExperience, IEducation, ISkillsResponse, IGetEducationParams, IGetSkillsParams, IGetUsersParams, IGetWorkDataParams, TAxiosGetParams } from '../models';

const key = process.env.NEXT_PUBLIC_API_KEY || '';
const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

class DataProvider {
    headers: Record<string, string> = {
        "Content-Type": "application/json;charset=UTF-8",
        "x-api-key": `${key}`,
    };

    public async get<T>(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(baseUrl + path, {
            ...options, params,
            paramsSerializer: {
                encode: (params: TAxiosGetParams) => {
                    return params;
                }
            }, headers: this.headers
        });
        return response.data;
    }

    public async getCdn(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<Blob> {
        const response = await axios.get<Blob>('cdn URL' + path, {
            ...options,
            params,
            responseType: 'blob',
            paramsSerializer: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                encode: (params: any) => {
                    return params;
                }
            }
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


}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;