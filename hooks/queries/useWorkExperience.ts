import { useQuery } from '@tanstack/react-query';
import { IGetWorkDataParams } from '@/models/interfaces';
import { workService } from '@services';
import React from 'react';

const useWorkExperience = ({ lang, id }: IGetWorkDataParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ['work-experience', id, lang],
    queryFn: () => workService.getWorkData({ lang, id }),
    enabled: id.length > 0,
  });

  const sortedData = React.useMemo(() => {
    if (!data) return data;
    return [...data].sort((a, b) => {
      const [monthA, yearA] = a.activePeriod.startDate.split('/').map(Number);
      const [monthB, yearB] = b.activePeriod.startDate.split('/').map(Number);

      if (yearB !== yearA) {
        return yearB - yearA;
      }
      return monthB - monthA;
    });
  }, [data]);

  return { data: sortedData, isLoading };
};

export default useWorkExperience;
