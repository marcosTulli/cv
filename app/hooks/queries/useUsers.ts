import { useQuery } from "@tanstack/react-query";
import { userService } from "@/app/services";

const useUsers = () =>
    useQuery({
        queryKey: ['users'],
        queryFn: () => userService.getUsers(),
    });

export default useUsers;
