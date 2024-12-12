import { IGetIconKeyParams, IGetIconParams } from "../models/interfaces";
import DataProviderInstance from "./data-provider";

const location = '/icons';
const iconService = {

    getIconKey: async ({ name }: IGetIconKeyParams): Promise<string> => {
        return DataProviderInstance.get(`${location}/${name}`);
    },
    getIcon: async ({ fileKey }: IGetIconParams): Promise<Blob> => {
        return DataProviderInstance.getCdn(`/${fileKey}`);
    }
};

export default iconService;