import { useQuery } from "@tanstack/react-query";
import { IGetWorkDataParams } from "@/models/interfaces";
import { workService } from "@services";

const useWorkExperience = ({ lang, id }: IGetWorkDataParams) =>
  useQuery({
    queryKey: ["work-experience", id, lang],
    queryFn: () => workService.getWorkData({ lang, id }),
    enabled: id.length > 0,
  });

export default useWorkExperience;
