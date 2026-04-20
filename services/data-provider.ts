import axios, { AxiosRequestConfig } from 'axios';
import { TAxiosGetParams } from '../models/types';
import { IGetIconParams } from '@/models/interfaces';
import { authStore } from '@/store';

const cvApiKey = process.env.NEXT_PUBLIC_API_KEY || '';
const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
const uploadThingUrl = process.env.NEXT_PUBLIC_UPLOADTHING_URL;

class DataProvider {
  jsonHeaders: Record<string, string> = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-api-key': `${cvApiKey}`,
  };
  blobHeaders: Record<string, string> = {
    'Content-Type': 'image/png',
  };

  public async get<T>(
    location: string,
    params: Record<string, unknown> = {},
    options: AxiosRequestConfig = {},
  ): Promise<T> {
    const response = await axios.get(baseUrl + location, {
      ...options,
      params,
      paramsSerializer: {
        encode: (params: TAxiosGetParams) => {
          return params;
        },
      },
      headers: this.jsonHeaders,
    });
    return response.data;
  }

  private authHeaders(): Record<string, string> {
    const token = authStore.getState().accessToken;
    return token ? { ...this.jsonHeaders, Authorization: `Bearer ${token}` } : this.jsonHeaders;
  }

  public async post<T>(
    location: string,
    body: Record<string, unknown> = {},
    options: AxiosRequestConfig = {},
  ): Promise<T> {
    const response = await axios.post(baseUrl + location, body, {
      ...options,
      headers: this.authHeaders(),
    });
    return response.data;
  }

  public async patch<T>(
    location: string,
    body: Record<string, unknown> = {},
    options: AxiosRequestConfig = {},
  ): Promise<T> {
    const response = await axios.patch(baseUrl + location, body, {
      ...options,
      headers: this.authHeaders(),
    });
    return response.data;
  }

  public async delete<T>(location: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response = await axios.delete(baseUrl + location, {
      ...options,
      headers: this.authHeaders(),
    });
    return response.data;
  }

  public async getCdn(
    location: string,
    params: Record<string, unknown> = {},
    options: AxiosRequestConfig = {},
  ): Promise<Blob> {
    const response = await axios.get<Blob>(uploadThingUrl + location, {
      ...options,
      params,
      responseType: 'blob',
      paramsSerializer: {
        encode: (params: IGetIconParams) => {
          return params;
        },
      },
      headers: this.blobHeaders,
    });
    return response.data;
  }
}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;
