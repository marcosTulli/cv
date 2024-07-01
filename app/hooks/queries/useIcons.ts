import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetIconParams } from "@/app/models";

const useIcons = ({ iconName }: IGetIconParams) =>
    useQuery({
        queryKey: ['icons', iconName],
        queryFn: async () => {
            const blob: Blob = await DataProviderInstance.getIcon({ iconName });
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        }
    });


export default useIcons;
