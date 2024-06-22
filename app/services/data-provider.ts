import axios, { AxiosRequestConfig } from 'axios';
import * as Utils from '@/app/utils/index';
import { IUser, Language } from '../types';


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
                encode: (params: any) => {
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

    public getUserById = async ({ lang, id }: { lang: Language, id: string; }): Promise<IUser> => {
        return this.get(`/users/${lang}/${id}`);
    };


}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;