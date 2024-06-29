import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetSkillsParams } from "@/app/models";

const useSkills = ({ id }: IGetSkillsParams) =>
    useQuery({
        queryKey: ['skills', id],
        queryFn: () => DataProviderInstance.getSkills({ id }),
        enabled: id.length > 0
    });

export default useSkills;