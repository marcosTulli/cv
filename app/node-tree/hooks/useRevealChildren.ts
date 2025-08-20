import { TreeServicesInstance } from '@/services/';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useRevealChildren = () => {
  const queryClient = useQueryClient();
  const { mutate: toggleRevealChildren } = useMutation({
    mutationFn: TreeServicesInstance.toggleRevealChildren,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rootNode'] });
    },
  });

  return { toggleRevealChildren };
};

export default useRevealChildren;
