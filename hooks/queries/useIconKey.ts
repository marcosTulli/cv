import { useQuery } from "@tanstack/react-query";
import { IGetIconKeyParams } from "@/models/interfaces";
import { iconService } from "@services";

const useIconKey = ({ name }: IGetIconKeyParams) =>
  useQuery({
    queryKey: ["icons", name],
    queryFn: async () => iconService.getIconKey({ name }),
  });

export default useIconKey;
