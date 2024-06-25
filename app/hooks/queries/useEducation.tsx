import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { Language } from "@/app/types";

const useWorkExperience = ({ lang, id }: { lang: Language, id: string; }) =>
    useQuery({
        queryKey: ['education', id, lang],
        queryFn: () => DataProviderInstance.getEducation({ lang, id }),
        enabled: id.length > 0
    });

export default useWorkExperience;