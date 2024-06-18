import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "../services/data-provider";

export const useUsers = () =>
    useQuery({
        queryKey: ['users'],
        queryFn: () => DataProviderInstance.getUsers(),
    });