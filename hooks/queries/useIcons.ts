import { useQuery } from "@tanstack/react-query";
import { IGetIconParams } from "@/models/interfaces";
import { iconService } from "@services";

const useIcons = ({ fileKey }: IGetIconParams) =>
  useQuery({
    queryKey: ["icons", fileKey],
    queryFn: async () => {
      const blob: Blob = await iconService.getIcon({ fileKey });
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    },
    enabled: fileKey.length > 0,
  });

export default useIcons;
