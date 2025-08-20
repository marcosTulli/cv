import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { TreeServicesInstance } from '@/services';

const useCreateNode = () => {
  const queryClient = useQueryClient();

  const { mutate: createNode } = useMutation({
    mutationFn: TreeServicesInstance.createNode,
    onSuccess: (_, variables) => {
      toast(`Nuevo nodo ${variables.newNode.title} creado con éxito`, {
        type: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['rootNode'] });
    },
  });

  return { createNode };
};

export default useCreateNode;
