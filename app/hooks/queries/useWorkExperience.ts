import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { Language } from "@/app/models";

const useWorkExperience = ({ lang, id }: { lang: Language, id: string; }) =>
    useQuery({
        queryKey: ['work-experience', id, lang],
        queryFn: () => DataProviderInstance.getWorkData({ lang, id }),
        enabled: id.length > 0
    });

export default useWorkExperience;