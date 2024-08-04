import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetIconParams } from "@/app/models/interfaces";

const useIcons = ({ fileKey }: IGetIconParams) =>
    useQuery({
        queryKey: ['icons', fileKey],
        queryFn: async () => {
            const blob: Blob = await DataProviderInstance.getIcon({ fileKey });
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        },
        enabled: fileKey.length > 0
    });


export default useIcons;
