import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetWorkDataParams } from "@/app/models/interfaces";

const useWorkExperience = ({ lang, id }: IGetWorkDataParams) =>
    useQuery({
        queryKey: ['work-experience', id, lang],
        queryFn: () => DataProviderInstance.getWorkData({ lang, id }),
        enabled: id.length > 0
    });

export default useWorkExperience;