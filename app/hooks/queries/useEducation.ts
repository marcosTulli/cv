import { useQuery } from "@tanstack/react-query";
import { IGetEducationParams } from "@/app/models/interfaces";
import { educationService } from "@services";

const useEducation = ({ lang, id }: IGetEducationParams) =>
    useQuery({
        queryKey: ['education', id, lang],
        queryFn: () => educationService.getEducation({ lang, id }),
        enabled: id.length > 0
    });

export default useEducation;