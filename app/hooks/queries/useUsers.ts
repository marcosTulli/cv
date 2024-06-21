import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";

const useUsers = () =>
    useQuery({
        queryKey: ['users'],
        queryFn: () => DataProviderInstance.getUsers(),
    });

export default useUsers;
