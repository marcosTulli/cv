import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/app/services/data-provider";

const useSkills = ({ id }: { id: string; }) =>
    useQuery({
        queryKey: ['skills', id],
        queryFn: () => DataProviderInstance.getSkills({ id }),
        enabled: id.length > 0
    });

export default useSkills;