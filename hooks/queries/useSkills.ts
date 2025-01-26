import { useQuery } from "@tanstack/react-query";
import { IGetSkillsParams } from "@/models/interfaces";
import { skillsService } from "@services";

const useSkills = ({ id }: IGetSkillsParams) =>
  useQuery({
    queryKey: ["skills", id],
    queryFn: () => skillsService.getSkills({ id }),
    enabled: id.length > 0,
  });

export default useSkills;
