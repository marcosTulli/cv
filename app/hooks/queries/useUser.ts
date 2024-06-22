import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { Language } from "@/app/types";

const useUser = ({ lang, id }: { lang: Language, id: string; }) =>
    useQuery({
        queryKey: ['user', id, lang],
        queryFn: () => DataProviderInstance.getUserById({ lang, id }),
    });

export default useUser;