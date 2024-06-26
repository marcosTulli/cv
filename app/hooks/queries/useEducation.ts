import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetEducationParams } from "@/app/models";

const useWorkExperience = ({ lang, id }: IGetEducationParams) =>
    useQuery({
        queryKey: ['education', id, lang],
        queryFn: () => DataProviderInstance.getEducation({ lang, id }),
        enabled: id.length > 0
    });

export default useWorkExperience;