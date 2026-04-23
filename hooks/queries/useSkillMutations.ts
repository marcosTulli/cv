import { useMutation, useQueryClient } from '@tanstack/react-query';
import { skillsService } from '@services';
import { IAddSkillParams, IDeleteSkillParams, IPatchSkillParams } from '@/models/interfaces';
import { uiStore, languageStore } from '@/store';

const useSkillMutations = () => {
  const queryClient = useQueryClient();
  const showSnackbar = uiStore((state) => state.showSnackbar);
  const { strings } = languageStore();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['skills'] });

  const addSkill = useMutation<unknown, Error, IAddSkillParams>({
    mutationFn: (params) => skillsService.addSkill(params),
    onSuccess: () => {
      showSnackbar(strings.skillAddedSuccess || 'Skill added', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.skillError || 'Something went wrong', 'error'),
  });

  const patchSkill = useMutation<unknown, Error, IPatchSkillParams>({
    mutationFn: (params) => skillsService.patchSkill(params),
    onSuccess: () => {
      showSnackbar(strings.skillUpdatedSuccess || 'Skill updated', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.skillError || 'Something went wrong', 'error'),
  });

  const deleteSkill = useMutation<unknown, Error, IDeleteSkillParams>({
    mutationFn: (params) => skillsService.deleteSkill(params),
    onSuccess: () => {
      showSnackbar(strings.skillDeletedSuccess || 'Skill deleted', 'success');
      invalidate();
    },
    onError: () => showSnackbar(strings.skillError || 'Something went wrong', 'error'),
  });

  return { addSkill, patchSkill, deleteSkill };
};

export default useSkillMutations;
