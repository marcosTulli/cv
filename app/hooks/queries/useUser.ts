import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";
import { IGetUsersParams } from "@/app/models/interfaces";

const useUser = ({ lang, id }: IGetUsersParams) =>
    useQuery({
        queryKey: ['user', id, lang],
        queryFn: () => DataProviderInstance.getUserById({ lang, id }),
        enabled: id.length > 0
    });

export default useUser;