import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { Language } from "@/app/types";

const useUser = ({ lang, id }: { lang: Language, id: string; }) =>
    useQuery({
        queryKey: ['user', id, lang],
        queryFn: () => DataProviderInstance.getUserById({ lang, id }),
        enabled: id.length > 0
    });

export default useUser;