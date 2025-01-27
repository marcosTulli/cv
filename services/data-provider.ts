import axios, { AxiosRequestConfig } from "axios";
import { TAxiosGetParams } from "../models/types";
import { IGetIconParams } from "@/models/interfaces";

const cvApiKey = process.env.NEXT_PUBLIC_API_KEY || "";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
const uploadThingUrl = process.env.NEXT_PUBLIC_UPLOADTHING_URL;

class DataProvider {
  jsonHeaders: Record<string, string> = {
    "Content-Type": "application/json;charset=UTF-8",
    "x-api-key": `${cvApiKey}`,
  };
  blobHeaders: Record<string, string> = {
    "Content-Type": "image/png",
  };

  public async get<T>(
    location: string,
    params: Record<string, unknown> = {},
    options: AxiosRequestConfig = {}
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

  public async getCdn(
    location: string,
    params: Record<string, unknown> = {},
    options: AxiosRequestConfig = {}
  ): Promise<Blob> {
    const response = await axios.get<Blob>(uploadThingUrl + location, {
      ...options,
      params,
      responseType: "blob",
      paramsSerializer: {
        encode: (params: IGetIconParams) => {
          return params;
        },
      },
      headers: this.blobHeaders,
    });
    return response.data as Blob;
  }
}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;
