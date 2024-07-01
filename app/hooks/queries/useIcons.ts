import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetIconParams } from "@/app/models";

const useIcons = ({ iconName }: IGetIconParams) =>
    useQuery({
        queryKey: ['users', iconName],
        queryFn: () => DataProviderInstance.getIcon({ iconName }),
    });

export default useIcons;
