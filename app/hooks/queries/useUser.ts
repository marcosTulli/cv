import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";

const useUser = ({ id }: { id: string; }) =>
    useQuery({
        queryKey: ['user', id],
        queryFn: () => DataProviderInstance.getUserById({ id }),
    });

export default useUser;