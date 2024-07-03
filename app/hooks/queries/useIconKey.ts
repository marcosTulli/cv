import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetIconKeyParams, } from "@/app/models";

const useIconKey = ({ name }: IGetIconKeyParams) =>
    useQuery({
        queryKey: ['icons', name],
        queryFn: async () => DataProviderInstance.getIconKey({ name })
    });


export default useIconKey;
